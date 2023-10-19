import { ImageAnnotatorClient } from "@google-cloud/vision";

async function main() {
    const client = new ImageAnnotatorClient();
    const fileName = "./images/logo.jpg";
    const [result] = await client.logoDetection(fileName);
    const logos = result.logoAnnotations;
    console.log("Logos:");
    logos?.forEach(logo => console.log(logo));
}

main();