import http from "@/util/http";

export function getCategoryAPI (id) {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}

export const getSubCategoryAPI = (data) => {
    return http({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }
  export const getCategoryFilterAPI = (id) => {
    return http({
      url: '/category/sub/filter',
      params: {
        id
      }
    })
  }
  