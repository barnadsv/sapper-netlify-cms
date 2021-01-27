import * as sapper from '@sapper/app';
import Api from '@beyonk/sapper-httpclient';

Api.configure({ baseUrl: '/.netlify/functions' });

sapper.start({
	target: document.querySelector('#sapper')
});