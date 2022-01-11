// class TuongPhep {
//     constructor(name, mana) {
//         this.tentuong = name;
//         this.sucmanh = mana;
//     }

//     showInfo() {
//         console.log(`
//     ten: ${this.tentuong}
//     suc mạnh :${this.sucmanh}
//     `);
//     }
// }
// const tuong1 = new TuongPhep("t1", "t2");
// console.log(`${tuong1.tentuong} ${tuong1.sucmanh}`);
import Navigo from "navigo";
import home from "./page/home";
import about from "./page/about";

const render = (content) => {
    document.getElementById("app").innerHTML = content.print();
};
const router = new Navigo("/", { linksSelector: "a" });
router.on({
    "/": () => {
        render(home);
    },
    "/about": () => {
        render(about);
    },

});
router.resolve();
