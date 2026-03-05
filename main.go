package main

import (
	"log"
	"net/http"
)

// basic serving
func main() {
	fs := http.FileServer(http.Dir("./public"))
	http.Handle("/", fs)
	log.Println("running on :8090")
	err := http.ListenAndServe(":8090", nil)
	if err != nil {
		log.Fatal(err)
	}
}
