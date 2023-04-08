// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,


//   images: {
//     domains: ['secretseventeen.com'],
//   },

// }


module.exports = {
  // images: {
  //   // domains: ['secretseventeen.com', "http://localhost:5000"],
  //   domains: ['localhost:5000'],
  // },

  reactStrictMode: true,
  images : {
    domains : ['secretseventeen.com', 'localhost'] // <== Domain name
  }
}

// module.exports = nextConfig
