import lume from "lume/mod.ts";
import image from "../../image.ts";

const site = lume();
site.use(image());
site.data("layout", "default.njk");

export default site;
