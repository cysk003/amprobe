# config

`config.toml` 配置文件示例：

```toml
[Fiber]
# http监听地址
Host = "0.0.0.0"
# http监听端口
Port = 8000
# http优雅关闭等待超时时长(单位秒)
ShutdownTimeout = 30
SeverHeader = "probe"
AppName = "probe"
Prefork = false

# 数据库文件存放位置的配置
# 需要监控的磁盘设备配置
# 定时任务执行间隔配置
[Gorm]
# 是否开启调试模式
Debug = true
# 数据库类型(目前支持的数据库类型：sqlite postgres)
DBType = "sqlite"
# 设置连接可以重用的最长时间(单位：秒)
MaxLifetime = 7200
# 设置数据库的最大打开连接数
MaxOpenConns = 150
# 设置空闲连接池中的最大连接数
MaxIdleConns = 50
# 数据库表名前缀
TablePrefix = "s_"
# 是否启用自动映射数据库表结构
EnableAutoMigrate = true

[DB]
# 连接地址
Host = ""
# 连接端口
Port = 0
# 用户名
User = ""
# 密码
Password = ""
# 数据库
DBName = "/app/probe"
# SSL模式
SSLMode = ""

[Disk]
# 要监控的磁盘分区
Devices = ["/dev/vda2", "/dev/vda3", "/dev/disk3s1s1"]

[Ethernet]
# 要监控的网口
Names = ["eth0", "en0"]

[Task]
# 监控间隔
Interval = 15  # 单位 s

[Logger]
# 日志等级
Level = "info"

```