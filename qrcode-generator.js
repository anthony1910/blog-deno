import { qrcode } from 'https://deno.land/x/qrcode/mod.ts'
import { serve } from 'https://deno.land/std/http/server.ts'

const myServer = serve({ port: 8000 });

let args = Deno.args;

/*
let base64 = await qrcode('https://hcode.com.br', {
    size: 300
})
*/

let base64 = await qrcode(args[0], {
    size: 300
})

console.log('Server running...');

for await (const request of myServer) {

    request.respond({
        headers: new Headers({
            'Content-Type': 'text/html'
        }),
        body: `
            <div style="display: flex; justify-content: center; margin-top: 30px;">
                <img src="${base64}" />
            </div>
        `
    });

}