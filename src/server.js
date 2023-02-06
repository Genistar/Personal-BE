var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
import imageUpload from './uploadI';
var initWebRoutes = require('./routes/admin/web');
var connectDB = require('./config/connectDB');
const khenThuongRoutes = require('./routes/admin/khen_thuong');
const disciplineRoutes = require('./routes/admin/ky_luat');
const trainingRoutes = require('./routes/admin/dao_tao');
const cultivationRoutes = require('./routes/admin/boi_duong');
const aboardBRoutes = require('./routes/admin/cong_tac_ngoai_nuoc');
const businessRoutes = require('./routes/admin/cong_tac');
const directoryRoutes = require('./routes/danh_muc');
const contractDRoutes = require('./routes/dam_muc_hop_dong');
const rewardUserRoutes = require('./routes/user/reward');
const disciplineUserRoutes = require('./routes/user/discipline')
const trainingUserRoutes = require('./routes/user/training');
const aboardBUserRoutes = require('./routes/user/aboardB');
const cultivationUserRoutes = require('./routes/user/cultivation');
const businessUserRoutes = require('./routes/user/business');
const dailyRoutes = require('./routes/nhat_ky');
const accountRoutes = require('./routes/admin/account');
const hopDongRoutes = require('./routes/admin/hop_dong_can_bo');
const contractUserRoutes = require('./routes/user/contract');
const familyRoutes = require('./routes/user/family');
const roleRoutes = require('./routes/admin/vai_tro')
require('dotenv').config();

let app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(imageUpload.single('hinh_anh'))
app.use(express.static('src'));
app.use(cors());


initWebRoutes(app);
khenThuongRoutes(app);
disciplineRoutes(app);
trainingRoutes(app);
cultivationRoutes(app);
businessRoutes(app);
aboardBRoutes(app);
directoryRoutes(app);
rewardUserRoutes(app);
disciplineUserRoutes(app);
trainingUserRoutes(app);
aboardBUserRoutes(app);
cultivationUserRoutes(app);
businessUserRoutes(app);
dailyRoutes(app);
accountRoutes(app);
hopDongRoutes(app);
contractDRoutes(app);
contractUserRoutes(app);
familyRoutes(app);
roleRoutes(app);


connectDB();
var port = process.env.PORT || 9696;
app.listen(port, () => {
    console.log('server is running on port:' + port);
})