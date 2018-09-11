package main

import (
  "net/http"
  "github.com/gin-gonic/contrib/static"
  "github.com/gin-gonic/gin"
  "github.com/itsjamie/gin-cors"
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
  c.Header("Content-Type", "application/json")
  c.JSON(http.StatusOK, gin.H {
    "message":"Returning a response",
  })
}