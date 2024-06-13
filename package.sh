#!/bin/bash
#####################################################################
# Author     : wangjialong
# Date       : 2024/06/12 15:33:01
# Description: 打包：sh package.sh arm64
#                   sh package.sh amd64
#####################################################################

set -ex

echo $1

function clear() {
    rm -rf amprobe/dist
    rm -rf amvector/amvector
    rm -rf amprobe.tar.gz
    rm -rf amprobe.installer.zip
    rm -rf amprobe.installer.arm.zip
}

# web
function web() {
    cd web
    rm -rf dist
    pnpm install
    pnpm run build
    cp -r dist ../amprobe/dist
    cd ..
}

# amprobe
function amprobe() {
    cd amprobe
    make wire
    if [ $1 -eq 'amd64' ]; then
        make amd64
    else
        make arm64
    fi
    cd ..
}

# amvector
function amvector() {
    cd amvector
    rm amvector
    make wire
    if [ $1 -eq 'amd64' ]; then
        make amd64
    else
        make arm64
    fi
    cd ..
}

function package() {
    FILELIST="run.sh amvector/amvector amvector/configs amprobe/configs amprobe/nginx"
    if [ $1 -eq 'amd64' ]; then
        docker save amuluze/amprobe:v1.3.4 | gzip > amprobe.tar.gz
        FILELIST="${FILELIST} amprobe.tar.gz"
        zip -0qr amprobe.installer.zip ${FILELIST}
        rm amprobe.tar.gz
    else
        docker save amuluze/amprobe_arm:v1.3.4 | gzip > amprobe.arm.tar.gz
        FILELIST="${FILELIST} amprobe.arm.tar.gz"
        zip -0qr amprobe.installer.arm.zip ${FILELIST}
        rm amprobe.arm.tar.gz
    fi
}

clear
echo "Building web"
web
echo "Build web done"

echo "Building amprobe"
amprobe
echo "Build amprobe done"

echo "Building amvector"
amvector
echo "Build amvector done"

echo "Packaging"
package
echo "Packag done"
