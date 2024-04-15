import { ADMIN_PASS } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';


export const handle: Handle = async ({ event, resolve }) => {
	console.log('hook is running')
	
	const myCookie = event.cookies.get('session')
	if (event.cookies.get('session') == ADMIN_PASS){
		event.locals.isAuth = true
		console.log ('hooks let him go')
    }
	else{
		event.locals.isAuth = false
		console.log ("hooks won't let him go")
	}
	return  await resolve(event);
};