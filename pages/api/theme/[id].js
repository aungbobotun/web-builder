let themes = [
  {
    id: '3b7d',
    pages: {
      homepage: {
        sections: [
          {
            order: '',
            id: 'hero',
            show: true,
            title: 'Hero banner',
            image: true,
            childs: [
              {
                id: 'title',
                show: true,
                label: 'Header title',
                value: 'Daily yoga classes & workouts',
              },
              {
                id: 'description',
                show: true,
                label: 'Description',
                value:
                  'From Vinsanya and Hatha ta Yin and Restratve. Explore 3000 yoga videoes across twelve different styles is simply dummy text of the printing and typesetting industry.',
              },
              {
                id: 'buttons',
                show: true,
                label: 'Buttons',
                items: [
                  { label: 'Book Now', link: 'https://tiptap.dev/api/events', outline: false },
                  { label: '', link: '', outline: false },
                ],
              },
            ],
          },
          {
            id: 'about',
            show: true,
            title: 'About',
            image: true,
            childs: [
              {
                id: 'title',
                show: true,
                label: 'Header title',
                value: 'About Yoga Shada',
              },
              {
                id: 'description',
                show: true,
                label: 'Description',
                value:
                  'Yoga Shada is a yoga designed for real people- whether you are a busy in need.web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words',
              },
              {
                id: 'buttons',
                show: true,
                label: 'Buttons',
                items: [
                  { label: 'View our Team', link: 'https://tiptap.dev/api/events', outline: false },
                  { label: '', link: '', outline: false },
                ],
              },
            ],
          },
        ],
      },
      checkoutpage: {
        sections: [
          {
            id: 'hero',
            show: true,
            title: 'Hero banner',
            image: false,
            childs: [
              {
                id: 'title',
                show: true,
                label: 'Header title',
                value: 'The quickest way to build conversion-optimized payment forms',
              },
              {
                id: 'description',
                show: true,
                label: 'Description',
                value:
                  'Checkout creates a secure, Stripe-hosted payment page that lets you collect payments quickly. It works across devices and can help increase your conversion. Checkout makes it easy to build a first-class payments experience:',
              },
              {
                id: 'buttons',
                show: true,
                label: 'Buttons',
                items: [
                  {
                    label: 'Checkout Now',
                    link: 'https://nextjs.org/docs/advanced-features/dynamic-import',
                    outline: false,
                  },
                  { label: '', link: '', outline: false },
                ],
              },
            ],
          },
        ],
      },
    },
  },
];

export default function handler(req, res) {
  let theme;

  switch (req.method) {
    case 'POST':
      const body = JSON.parse(req.body);
      handleImageUpload(Object.entries(body.images));
      const { id, pages } = body.theme;
      themes = themes.map(theme => (theme.id === id ? { ...theme, pages } : theme));
      res.status(200).json('OK');
      break;

    default:
      theme = themes.find(({ id }) => id === req.query.id);
      !!theme ? res.status(200).json(theme) : res.status(404);
      break;
  }
}

function handleImageUpload(images) {
  images.forEach(([path, base64]) => {
    if (!base64) {
      console.log(`Code for deleteing ${path}`);
    } else {
      console.log(`Code for saving base64 into image file on path:${path}`);
    }
  });
}
