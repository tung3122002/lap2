import header from "../components/header";
import footer from "../components/footer";
import News from "../components/new";
import banner from "../components/banner";
import Showmenu from "../components/menu";

const home = {
    print() {
        return `${header.print()}
        ${Showmenu.print()}
        ${banner.print()}
       
        ${News.print()}
        ${News.print()}
        ${footer.print()}
     
        `;
    },
};
export default home;
