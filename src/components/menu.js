import { menu } from "../data";

const Showmenu = {
    print() {
        return `
        <div class="menu flex flex-nowrap list-none h-[50px] bg-[#C87904]">
          <div id="menu1" class="menu1 flex flex-nowrap list-none h-[50px] bg-[#C87904">
          ${menu.map((item) => `
          <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] "><a class="  hover:text-white"
          href="">${item}</a></li>
          `).join("")}
           
  
          </div>
          <form class="ml-[110px] p-[15px]" action="">
            <input type="text" name="" id="" placeholder="tìm kiếm">
            <button class="bg-[#263055] px-[20px] text-white" type="submit">Tìm kiếm</button>
          </form>
        </div>
      
        `;
    },

};
export default Showmenu;
