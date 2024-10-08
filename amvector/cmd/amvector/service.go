// Package main
// Date: 2024/4/23 20:12
// Author: Amu
// Description:
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"amvector/service"
	"github.com/takama/daemon"
)

type Service struct {
	configFile string
	prefix     service.Prefix
	daemon     daemon.Daemon
}

// Start amvector bootstrap service non-blocking
func (s *Service) Start() {
	fmt.Printf("Starting amvector bootstrap service...\n")
}

// Run start amvector bootstrap service blocking and wait for exit signal
func (s *Service) Run() {
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt, syscall.SIGTERM)
	clearFunc, err := service.Run(s.configFile, s.prefix)
	if err != nil {
		return
	}

	for range interrupt {
		clearFunc()
		return
	}
}

// Stop amvector bootstrap service
func (s *Service) Stop() {
	fmt.Println("Stopping amvector bootstrap service...")
}

func (s *Service) manager(args []string) (string, error) {
	if len(args) > 0 {
		command := args[0]
		switch command {
		case "install":
			installArgs := args[1:]
			return s.daemon.Install(installArgs...)
		case "remove":
			return s.daemon.Remove()
		case "start":
			return s.daemon.Start()
		case "stop":
			return s.daemon.Stop()
		case "status":
			return s.daemon.Status()
		case "setup":
			fmt.Printf("initializing configuration files...\n")
			if err := runSetup(); err != nil {
				fmt.Printf("error initializing configuration files: %v\n", err)
				os.Exit(-1)
			} else {
				os.Exit(0)
			}
		default:
			usage()
			return "", nil
		}
	}

	return s.daemon.Run(s)
}
