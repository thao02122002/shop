const Header = {
    render() {
        return `<div class="logo bg-blue-900">
        <img class="mx-auto py-4" src="./img/logo-trang.png" alt="" />
      </div>
      <div class="menu grid grid-cols-12 bg-yellow-600">
        <nav class="col-span-9 py-2  mx-auto">
      <ul >
        <li class="inline-block pr-12 text-white hover:text-blue-800"><a href="/">Trang chủ</a></li>
        <li class="inline-block pr-12 text-white hover:text-blue-800"><a href="/about">Tuyển sinh</a></li>
        <li class="inline-block pr-12 text-white hover:text-blue-800"><a href="/product">Chương trình đào tạo</a></li>
        <li class="inline-block pr-12 text-white hover:text-blue-800"><a href="">Góc sinh viên</a></li>
        <li class="inline-block pr-12 text-white hover:text-blue-800"><a href="">Tuyển dụng</a></li>
      </ul>
        </nav>
        <div class="search col-span-3 py-2 pl-8">
          <input class="border border-black bg-white p-1" type="text">
          <button class="border border-black bg-blue-900 text-white p-1" type="submit">Tìm kiếm</button>
        </div>
      </div>
      <div class="banner">
        <img src="./img/banner.png" alt="" width="100%">
      </div>`;
    },
};
export default Header;