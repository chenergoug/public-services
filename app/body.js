const { koaBody } = require('koa-body')
// module.exports = koaBody({
//   multipart: true,
//   formidable: {
//     keepExtensions: true, // 保持文件的后缀
//     maxFieldsSize: 20 * 1024 * 1024, // 文件上传大小
//     onFileBegin: (name, file) => {
//       const ext = file.originalFilename.split('.').pop()
//       file.newFilename = `${Date.now()}.${ext}`
//       file.filename = file.newFilename

//       // 这边是为了将上传的图片和文件进行区分开，放入不同的文件夹
//       const regex = /^image/
//       if (regex.test(file.mimetype)) {
//         file.path = `/file/picture/${file.filename}`
//         file.filepath = path.join(__dirname, `../../file/picture/${file.filename}`)
//       }
//     }
//   }
// })

module.exports = koaBody
