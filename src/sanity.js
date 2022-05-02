import sanityClient from '@sanity/client';

export default sanityClient({
		projectId: '41mb2sa5',
		dataset: 'production',
		apiVersion: '2022-05-02', // when the project where first created
		useCdn: false // false for localhost, true for netlify
	});