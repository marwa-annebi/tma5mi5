import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event: any) => {
		console.log('--> / - page.server - form action logout');
		event.cookies.delete('access_token', { path: '/' });

		event.locals.usuario = null;

		throw redirect(302, '/auth');
	}
};
