import http from "@/util/http";

export function getCategoryAPI () {
    return http({
      url: '/home/category/head'
    })
  }