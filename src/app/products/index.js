import nc from 'next-connect'
import dbConnect from '../../../backend/config/dbConnect'
import { newProduct } from '../../../backend/contorllers/productControllers';
const handler = nc();
dbConnect();
handler.post(newProduct);
c

export default handler;