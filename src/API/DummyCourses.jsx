// import excel from "/IMG"

export const fakeFetchCourses = (url) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(url === "www.courses"){
                resolve({
                  status: 200,
                  message: "Success",
                  data: {
                    courses: [
                      {
                        id: 1,
                        thumbnail:
                          "https://whitelabel-content.s3.ap-south-1.amazonaws.com/14245/service-image/16580819021.png",
                        course_name: "OS-CIT",
                        category: "Computer",
                      },
                      {
                        id: 2,
                        thumbnail: "https://shorturl.at/bvz29",
                        course_name: "OS-CIT 'A'",
                        category: "Computer",
                      },
                      {
                        id: 3,
                        thumbnail: "https://shorturl.at/rAY58",
                        course_name: "OS-CIT 'A+'",
                        category: "Computer",
                      },
                      {
                        id: 4,
                        thumbnail:
                          "https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/86110a60-116f-42d6-842d-52c42677f99b-1684775379244.jpeg",
                        course_name: "MS-Excel",
                        category: "MS-Office",
                      },
                      {
                        id: 5,
                        thumbnail:
                          "https://e7.pngegg.com/pngimages/235/949/png-clipart-logo-adobe-systems-shop-logo-hd-shop-logo-blue-text-thumbnail.png",
                        course_name: "Photoshop",
                        category: "Design",
                      },
                      {
                        id: 6,
                        thumbnail:
                          "https://5.imimg.com/data5/RY/OK/MY-25169368/tally-erp-9-gst-version.jpg",
                        course_name: "Tally with GST",
                        category: "Account",
                      },
                      {
                        id: 7,
                        thumbnail: "https://rb.gy/rru7o3",
                        course_name: "C",
                        category: "Programming",
                      },
                      {
                        id: 8,
                        thumbnail: "https://rb.gy/eazp5k",
                        course_name: "C++",
                        category: "Programming",
                      },
                      {
                        id: 9,
                        thumbnail:
                          "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
                        course_name: "JAVA",
                        category: "Programming",
                      },
                      {
                        id: 10,
                        thumbnail:
                          "https://w7.pngwing.com/pngs/772/151/png-transparent-blender-logo-tech-companies-thumbnail.png",
                        course_name: "Blender",
                        category: "Design",
                      },
                      {
                        id: 11,
                        thumbnail: "https://shorturl.at/etyRU",
                        course_name: "Advanced Excel",
                        category: "MS-Office",
                      },
                      {
                        id: 12,
                        thumbnail: "https://shorturl.at/JRX23",
                        course_name: "PowerPoint",
                        category: "MS-Office",
                      },
                      {
                        id: 13,
                        thumbnail: "https://shorturl.at/pABJO",
                        course_name: "MS-Word",
                        category: "MS-Office",
                      },
                    ],
                  },
                });
            } else {
                reject({
                    status: 404,
                    message: "Courses not found."
                })
            }
        },2000)
    })
} 