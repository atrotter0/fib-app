package main

import (
  "net/http"
  "github.com/gin-gonic/contrib/static"
  "github.com/gin-gonic/gin"
  "github.com/itsjamie/gin-cors"
  "strconv"
)

func main() {
  // Set the router as the default one shipped with Gin
  router := gin.Default()

  // Serve frontend static files
  router.Use(static.Serve("/", static.LocalFile("./build/", true)))
  router.Use(cors.Middleware(cors.Config{
    Origins:        "*",
    Methods:        "GET, PUT, POST, DELETE",
    RequestHeaders: "Origin, Authorization, Content-Type",
    ExposedHeaders: "",
    Credentials: true,
    ValidateHeaders: false,
  }))

  // Setup route group for the API
  api := router.Group("/api")
  {
    api.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H {
        "message": "pong",
      })
    })
  }
  api.GET("/fibonacci/:num", FibHandler)

  // Start and run the server
  router.Run(":8080")
}

func FibHandler(c *gin.Context) {
  if num, err := strconv.Atoi(c.Param("num")); err == nil {
    var fib = generateFibonacci(num)
    c.JSON(http.StatusOK, fib)
  } else {
    c.AbortWithStatus(http.StatusNotFound)
  }
}

func generateFibonacci(num int) []int {
  fib := make([]int, num)
  for i := 0; i < num; i++ {
    if i == 0 {
      fib[i] = 0
    } else if i == 1 {
      fib[i] = 1
    } else {
      fib[i] = fib[i-1] + fib[i-2]
    }
  }
  return fib
}