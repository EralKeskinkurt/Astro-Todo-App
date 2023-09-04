export async function POST({params, cookies,request}) {
    const body = await request.json();
    const time = new Date().getTime()
    const expireTime = time + 1000*36000;

    cookies.set('todos', JSON.stringify(body), { path: "/", httpOnly: true, secure: false, maxAge: expireTime })
    return new Response(
        JSON.stringify({status: 200, message: 'Successful'}),
    )
}

export async function GET({params, cookies, request}) {
    return new Response(
        JSON.stringify({status: 200, todo: cookies.get('todos')})
    )
}