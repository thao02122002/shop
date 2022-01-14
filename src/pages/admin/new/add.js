import navAdmin from "../../../components/navAdmin";

const addHome = {
    render() {
        return `
        
        ${navAdmin.render()}
        <h1 class="pt-40 pb-4">Thêm mới bài viết</h1>
        <div>
        <div class="md:grid md:grid-cols-3 md:gap-6 ">
          
          <div class="mt-5 md:mt-0 md:col-span-3">
            <form action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="">
                      </div>
                    </div>
                  </div>
      
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                    DESCRIPTION
                    </label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
                    </div>
                    
                  </div>
      
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <div class="mt-1 flex items-center">
                     <input class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"" type="file">
                        
                    
                    </div>
                  </div>
      
                  
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        `;
    },
};
export default addHome;