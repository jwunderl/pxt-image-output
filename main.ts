namespace imageemitter {
    export function saveImage(im: Image, name: string) {
        console.log("//% fixedInstance");
        console.log("export const " + name + " = img`");
        for (let height = 0; height < im.height; height++) {
            let output = "\t";
            for (let width = 0; width < im.width; width++) {
                const pix = im.getPixel(width, height);
                output += (pix < 10 ? pix + "" : "ABCDEF".charAt(pix - 10)) + " ";
            }
            console.log(output);
        }
        console.log("`");
        console.log("");
    }

    export function saveSpriteSheet(ims: Image[], prefix: string) {
        ims.forEach((im: Image, index: number) => saveImage(im, prefix + index));
    }
}