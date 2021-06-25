import { Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./midwares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./midwares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUserController";
const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticaUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUsersController();


router.post("/users", createUserController.handle);
router.post("/login", authenticaUserController.handle)
router.post("/tags", ensureAuthenticated,ensureAdmin, createTagController.handle);
router.post("/compliments",ensureAuthenticated,createComplimentController.handle )
router.get("/users/compliments/send", ensureAuthenticated,listUserSendComplimentsController.handle)
router.get("/users/compliments/receive",ensureAuthenticated,listUserReceiveComplimentsController.handle )
router.get("/tags",ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUserController.handle)
export{router};