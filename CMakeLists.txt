# Generated from qtshadertools.pro.

cmake_minimum_required(VERSION 3.15.0)

include(.cmake.conf)
project(QtShaderTools
    VERSION "${QT_REPO_MODULE_VERSION}"
    DESCRIPTION "Qt ShaderTools Libraries"
    HOMEPAGE_URL "https://qt.io/"
    LANGUAGES CXX C
)

find_package(Qt6 ${PROJECT_VERSION} CONFIG REQUIRED COMPONENTS BuildInternals Core)
find_package(Qt6 ${PROJECT_VERSION} QUIET CONFIG OPTIONAL_COMPONENTS Gui)

if(INTEGRITY)
add_compile_definitions(__inline=inline)
endif()

if(NOT TARGET Qt::Gui)
    message(NOTICE "Skipping the build as the condition \"TARGET Qt::Gui\" is not met.")
    return()
endif()
if(VXWORKS OR WATCHOS)
    message(NOTICE "Skipping the build as the condition \"NOT VXWORKS AND NOT WATCHOS\" is not met.")
    return()
endif()
qt_build_repo()
