import { serve } from 'https://deno.land/std/http/server.ts'

const server = serve({ port: 8000 });

console.log('Server running...');

for await (const req of server) {

    req.respond({
        body: '<h1>Hello Hcode</h1>'
    });

}