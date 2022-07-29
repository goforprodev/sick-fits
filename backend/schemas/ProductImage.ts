import { cloudinaryImage } from "@keystone-next/cloudinary";
import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import "dotenv/config"

//cloudinary setup
export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder:'Acube-foots'
}

export const ProductImage = list({
    fields:{
        image:cloudinaryImage({
            cloudinary,
            label:'Source'
        }),
        altText:text(),
        //setting a relationship schema to the product
        product:relationship({ref:'Product.photo'})
    }
})