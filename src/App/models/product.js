import * as yup from 'yup';

export default yup.object().shape({
	title: yup.string().required(),
	price: yup
		.number()
		.required(),
		categoryId: yup.string().required('Category is required'),
		image: yup.mixed().required('Image is required!')
});
