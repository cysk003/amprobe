// Code generated by Wire. DO NOT EDIT.

//go:generate go run -mod=mod github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package service

import (
	api5 "amprobe/service/account/api"
	repository5 "amprobe/service/account/repository"
	service5 "amprobe/service/account/service"
	api4 "amprobe/service/audit/api"
	repository4 "amprobe/service/audit/repository"
	service4 "amprobe/service/audit/service"
	api3 "amprobe/service/auth/api"
	repository3 "amprobe/service/auth/repository"
	service3 "amprobe/service/auth/service"
	"amprobe/service/container/api"
	"amprobe/service/container/repository"
	"amprobe/service/container/service"
	api2 "amprobe/service/host/api"
	repository2 "amprobe/service/host/repository"
	service2 "amprobe/service/host/service"
	"amprobe/service/model"
)

// Injectors from wire.go:

func BuildInjector(configFile string, modelFile ModeConf) (*Injector, func(), error) {
	config, err := NewConfig(configFile)
	if err != nil {
		return nil, nil, err
	}
	store, cleanup, err := InitAuthStore(config)
	if err != nil {
		return nil, nil, err
	}
	models := model.NewModels()
	db, err := NewDB(config, models)
	if err != nil {
		cleanup()
		return nil, nil, err
	}
	auther, cleanup2, err := InitAuth(config, store, db)
	if err != nil {
		cleanup()
		return nil, nil, err
	}
	adapter := InitAdapter(db)
	syncedEnforcer, cleanup3, err := InitCasbin(config, modelFile, adapter)
	if err != nil {
		cleanup2()
		cleanup()
		return nil, nil, err
	}
	client, err := NewRPCClient(config)
	if err != nil {
		cleanup3()
		cleanup2()
		cleanup()
		return nil, nil, err
	}
	containerRepo := repository.NewContainerRepo(client)
	containerService := service.NewContainerService(containerRepo)
	containerAPI := api.NewContainerAPI(containerService)
	hostRepo := repository2.NewHostRepo(client)
	hostService := service2.NewHostService(hostRepo)
	hostAPI := api2.NewHostAPI(hostService)
	authRepo := repository3.NewAuthRepo(db)
	authService := service3.NewAuthService(auther, authRepo)
	authAPI := api3.NewLoginAPI(authService)
	auditRepo := repository4.NewAuditRepo(db)
	auditService := service4.NewAuditService(auditRepo)
	auditAPI := api4.NewAuditAPI(auditService)
	accountRepository := repository5.NewAccountRepository(db)
	accountService := service5.NewAccountService(accountRepository, syncedEnforcer)
	accountAPI := api5.NewAccountAPI(accountService)
	loggerHandler := NewLoggerHandler()
	termHandler := NewTermHandler()
	router := &Router{
		config:        config,
		auth:          auther,
		enforcer:      syncedEnforcer,
		containerAPI:  containerAPI,
		hostAPI:       hostAPI,
		authAPI:       authAPI,
		auditAPI:      auditAPI,
		accountAPI:    accountAPI,
		loggerHandler: loggerHandler,
		termHandler:   termHandler,
	}
	app := NewFiberApp(config, router)
	prepare := &Prepare{
		db:       db,
		enforcer: syncedEnforcer,
	}
	logger := NewLogger(config)
	injector, err := NewInjector(app, router, prepare, config, logger)
	if err != nil {
		cleanup3()
		cleanup2()
		cleanup()
		return nil, nil, err
	}
	return injector, func() {
		cleanup3()
		cleanup2()
		cleanup()
	}, nil
}
