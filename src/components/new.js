import product from "../data";

const News = {
    print() {
        return /* html */`
        <h2>Tin tức học tập</h2>
        <div class="tintuc-product grid grid-cols-3 gap-4">
            ${product.map((post) => `
            <div class="box-tintuc  w-[312px] h-[359px] border-2 p-[25px] border-rose-600 ">
            <div class="img-tintuc max-w-[310px] truncate ">
              <img class="hover:scale-110 truncate transition ease-in-out delay-75" src="${post.img}" alt="">
            </div>
            <div class="tintuc-text text-[#ad3f00] font-bold my-[10px] hover:text-[#00467F]">
              <p>${post.title}</p>
            </div>
            <div class="tintuc-text2 text-[12px] hover:text-[#00467F]">
            <p>${post.desc}</p>
            </div>
          </div>
            `).join("")}
            
        </div>
        
        `;
    },
};
export default News;
