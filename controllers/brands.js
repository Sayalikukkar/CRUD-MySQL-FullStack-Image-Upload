const db = require("../models");

//image upload
const multer = require("multer");
const path = require("path");

//create main model
const Brands = db.brands;

//1. Create brands

const addBrands = async (req, res) => {
  let info = {
    brand: req.body.brand,
    description: req.body.description,
    image: req.file.path,
  };
  const brands = await Brands.create(info);
  res.status(200).send(brands);
  console.log(brands);
};

//2. get all brands

const getAllBrands = async (req, res) => {
  try {
    let brands = await Brands.findAll({});

    if (!brands) {
      res.send("Job post not found");
    }
    res.status(200).send(brands);
  } catch (error) {
    res.json(error);
  }
};

//3. Update brand post

const updateBrands = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(req.body);
    let info = {
      brand: req.body.brand,
      description: req.body.description,
    };
    if (req.file) {
      const img = req.file.path;
      info.image = img;
    }
    let brands = await Brands.update(info, { where: { id: id } });
    console.log(brands);
    res.status(200).send("Brand updated");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//4. Delete brand post

const deleteBrands = async (req, res) => {
  let id = req.params.id;
  await Brands.destroy({ where: { id: id } });
  res.status(200).json("User has been deleted....");
};

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  addBrands,
  getAllBrands,
  updateBrands,
  deleteBrands,
  upload,
};
