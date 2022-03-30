import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('templates/Home'));
const CheckoutPage = dynamic(() => import('templates/Checkout'));

const pages = { homepage: HomePage, checkoutpage: CheckoutPage };

export default pages;
