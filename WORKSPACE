workspace(
    name = "monorepo",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "26c39450ce2d825abee5583a43733863098ed29d3cbaebf084ebaca59a21a1c8",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.39.0/rules_nodejs-0.39.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

node_repositories(package_json = ["//src/yarn:package.json"])

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()
