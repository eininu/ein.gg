export const phpUpdaterFiles = () => {
    return [
        [
            "import.php",
            "<?php\n" +
            "\n" +
            "exec('node assets/js/script.min.js', $output, $return_var);\n" +
            "\n" +
            "if (!empty($output)) {\n" +
            "    echo $output[0];\n" +
            "} else {\n" +
            "    echo json_encode(['error' => 'Произошла ошибка']);\n" +
            "}\n" +
            "\n" +
            "\n",
        ],
        [
            "index.html",
            "<!doctype html>\n" +
            "<html>\n" +
            "    <head>\n" +
            "        <title>Обновление сайта</title>\n" +
            '        <script src="assets/js/jquery.min.js"></script>\n' +
            '        <script src="assets/js/ajax.min.js"></script>\n' +
            '        <link rel="stylesheet" href="assets/css/style.min.css">\n' +
            "    </head>\n" +
            "    <body>\n" +
            '        <div class="content">\n' +
            '            <div class="lds-roller">\n' +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "                <div></div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "    </body>\n" +
            "</html>",
        ],
        [
            "modules.php",
            "<?php\n" +
            "exec('export PUPPETEER_SKIP_DOWNLOAD=true');\n" +
            "exec('export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true');\n" +
            "exec('npm i 2>&1', $output);\n" +
            "exec('node node_modules/puppeteer/install.js  2>&1', $output);\n" +
            "\n" +
            "// if (!empty($output)) {\n" +
            "//     var_dump($output);\n" +
            "// }\n" +
            "\n" +
            "echo 'Готово';",
        ],
        [
            "package.json",
            "{\n" +
            '  "dependencies": {\n' +
            '    "adm-zip": "^0.5.10",\n' +
            '    "decompress": "^4.2.1",\n' +
            '    "puppeteer": "^20.8.2"\n' +
            "  }\n" +
            "}\n",
        ],
        ["package-lock.json", "{\n" +
        "  \"name\": \"import\",\n" +
        "  \"lockfileVersion\": 2,\n" +
        "  \"requires\": true,\n" +
        "  \"packages\": {\n" +
        "    \"\": {\n" +
        "      \"dependencies\": {\n" +
        "        \"adm-zip\": \"^0.5.10\",\n" +
        "        \"decompress\": \"^4.2.1\",\n" +
        "        \"puppeteer\": \"^20.8.2\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/@babel/code-frame\": {\n" +
        "      \"version\": \"7.22.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.22.5.tgz\",\n" +
        "      \"integrity\": \"sha512-Xmwn266vad+6DAqEB2A6V/CcZVp62BbwVmcOJc2RPuwih1kw02TjQvWVWlcKGbBPd+8/0V5DEkOcizRGYsspYQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"@babel/highlight\": \"^7.22.5\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6.9.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/@babel/helper-validator-identifier\": {\n" +
        "      \"version\": \"7.22.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.22.5.tgz\",\n" +
        "      \"integrity\": \"sha512-aJXu+6lErq8ltp+JhkJUfk1MTGyuA4v7f3pA+BJ5HLfNC6nAQ0Cpi9uOquUj8Hehg0aUiHzWQbOVJGao6ztBAQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6.9.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/@babel/highlight\": {\n" +
        "      \"version\": \"7.22.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@babel/highlight/-/highlight-7.22.5.tgz\",\n" +
        "      \"integrity\": \"sha512-BSKlD1hgnedS5XRnGOljZawtag7H1yPfQp0tdNJCHoH6AZ+Pcm9VvkrK59/Yy593Ypg0zMxH2BxD1VPYUQ7UIw==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"@babel/helper-validator-identifier\": \"^7.22.5\",\n" +
        "        \"chalk\": \"^2.0.0\",\n" +
        "        \"js-tokens\": \"^4.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6.9.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/@puppeteer/browsers\": {\n" +
        "      \"version\": \"1.4.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@puppeteer/browsers/-/browsers-1.4.5.tgz\",\n" +
        "      \"integrity\": \"sha512-a0gpUa+XlxZHotoOklh99X6RC5R+hQGcVcYOH+oOIEBfQXPp8Z5c765XAu/zhxsjRuAZN4Xx4vZNlwN4wJro2A==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"debug\": \"4.3.4\",\n" +
        "        \"extract-zip\": \"2.0.1\",\n" +
        "        \"http-proxy-agent\": \"7.0.0\",\n" +
        "        \"https-proxy-agent\": \"7.0.1\",\n" +
        "        \"progress\": \"2.0.3\",\n" +
        "        \"proxy-from-env\": \"1.1.0\",\n" +
        "        \"socks-proxy-agent\": \"8.0.1\",\n" +
        "        \"tar-fs\": \"3.0.4\",\n" +
        "        \"unbzip2-stream\": \"1.4.3\",\n" +
        "        \"yargs\": \"17.7.1\"\n" +
        "      },\n" +
        "      \"bin\": {\n" +
        "        \"browsers\": \"lib/cjs/main-cli.js\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=16.3.0\"\n" +
        "      },\n" +
        "      \"peerDependencies\": {\n" +
        "        \"typescript\": \">= 4.7.4\"\n" +
        "      },\n" +
        "      \"peerDependenciesMeta\": {\n" +
        "        \"typescript\": {\n" +
        "          \"optional\": true\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/adm-zip\": {\n" +
        "      \"version\": \"0.5.10\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/adm-zip/-/adm-zip-0.5.10.tgz\",\n" +
        "      \"integrity\": \"sha512-x0HvcHqVJNTPk/Bw8JbLWlWoo6Wwnsug0fnYYro1HBrjxZ3G7/AZk7Ahv8JwDe1uIcz8eBqvu86FuF1POiG7vQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/agent-base\": {\n" +
        "      \"version\": \"7.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/agent-base/-/agent-base-7.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-o/zjMZRhJxny7OyEF+Op8X+efiELC7k7yOjMzgfzVqOzXqkBkWI79YoTdOtsuWd5BWhAGAuOY/Xa6xpiaWXiNg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"debug\": \"^4.3.4\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 14\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/ansi-regex\": {\n" +
        "      \"version\": \"5.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/ansi-styles\": {\n" +
        "      \"version\": \"3.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"color-convert\": \"^1.9.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/argparse\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==\"\n" +
        "    },\n" +
        "    \"node_modules/b4a\": {\n" +
        "      \"version\": \"1.6.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/b4a/-/b4a-1.6.4.tgz\",\n" +
        "      \"integrity\": \"sha512-fpWrvyVHEKyeEvbKZTVOeZF3VSKKWtJxFIxX/jaVPf+cLbGUSitjb49pHLqPV2BUNNZ0LcoeEGfE/YCpyDYHIw==\"\n" +
        "    },\n" +
        "    \"node_modules/base64-js\": {\n" +
        "      \"version\": \"1.5.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz\",\n" +
        "      \"integrity\": \"sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==\",\n" +
        "      \"funding\": [\n" +
        "        {\n" +
        "          \"type\": \"github\",\n" +
        "          \"url\": \"https://github.com/sponsors/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"patreon\",\n" +
        "          \"url\": \"https://www.patreon.com/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"consulting\",\n" +
        "          \"url\": \"https://feross.org/support\"\n" +
        "        }\n" +
        "      ]\n" +
        "    },\n" +
        "    \"node_modules/bl\": {\n" +
        "      \"version\": \"1.2.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/bl/-/bl-1.2.3.tgz\",\n" +
        "      \"integrity\": \"sha512-pvcNpa0UU69UT341rO6AYy4FVAIkUHuZXRIWbq+zHnsVcRzDDjIAhGuuYoi0d//cwIwtt4pkpKycWEfjdV+vww==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"readable-stream\": \"^2.3.5\",\n" +
        "        \"safe-buffer\": \"^5.1.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/buffer\": {\n" +
        "      \"version\": \"5.7.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz\",\n" +
        "      \"integrity\": \"sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==\",\n" +
        "      \"funding\": [\n" +
        "        {\n" +
        "          \"type\": \"github\",\n" +
        "          \"url\": \"https://github.com/sponsors/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"patreon\",\n" +
        "          \"url\": \"https://www.patreon.com/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"consulting\",\n" +
        "          \"url\": \"https://feross.org/support\"\n" +
        "        }\n" +
        "      ],\n" +
        "      \"dependencies\": {\n" +
        "        \"base64-js\": \"^1.3.1\",\n" +
        "        \"ieee754\": \"^1.1.13\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/buffer-alloc\": {\n" +
        "      \"version\": \"1.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"buffer-alloc-unsafe\": \"^1.1.0\",\n" +
        "        \"buffer-fill\": \"^1.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/buffer-alloc-unsafe\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg==\"\n" +
        "    },\n" +
        "    \"node_modules/buffer-crc32\": {\n" +
        "      \"version\": \"0.2.13\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz\",\n" +
        "      \"integrity\": \"sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \"*\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/buffer-fill\": {\n" +
        "      \"version\": \"1.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-T7zexNBwiiaCOGDg9xNX9PBmjrubblRkENuptryuI64URkXDFum9il/JGL8Lm8wYfAXpredVXXZz7eMHilimiQ==\"\n" +
        "    },\n" +
        "    \"node_modules/callsites\": {\n" +
        "      \"version\": \"3.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/chalk\": {\n" +
        "      \"version\": \"2.4.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz\",\n" +
        "      \"integrity\": \"sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"ansi-styles\": \"^3.2.1\",\n" +
        "        \"escape-string-regexp\": \"^1.0.5\",\n" +
        "        \"supports-color\": \"^5.3.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/chromium-bidi\": {\n" +
        "      \"version\": \"0.4.16\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/chromium-bidi/-/chromium-bidi-0.4.16.tgz\",\n" +
        "      \"integrity\": \"sha512-7ZbXdWERxRxSwo3txsBjjmc/NLxqb1Bk30mRb0BMS4YIaiV6zvKZqL/UAH+DdqcDYayDWk2n/y8klkBDODrPvA==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"mitt\": \"3.0.0\"\n" +
        "      },\n" +
        "      \"peerDependencies\": {\n" +
        "        \"devtools-protocol\": \"*\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/cliui\": {\n" +
        "      \"version\": \"8.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"string-width\": \"^4.2.0\",\n" +
        "        \"strip-ansi\": \"^6.0.1\",\n" +
        "        \"wrap-ansi\": \"^7.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=12\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/color-convert\": {\n" +
        "      \"version\": \"1.9.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz\",\n" +
        "      \"integrity\": \"sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"color-name\": \"1.1.3\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/color-name\": {\n" +
        "      \"version\": \"1.1.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz\",\n" +
        "      \"integrity\": \"sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==\"\n" +
        "    },\n" +
        "    \"node_modules/commander\": {\n" +
        "      \"version\": \"2.20.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/commander/-/commander-2.20.3.tgz\",\n" +
        "      \"integrity\": \"sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==\"\n" +
        "    },\n" +
        "    \"node_modules/core-util-is\": {\n" +
        "      \"version\": \"1.0.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz\",\n" +
        "      \"integrity\": \"sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==\"\n" +
        "    },\n" +
        "    \"node_modules/cosmiconfig\": {\n" +
        "      \"version\": \"8.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-8.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-3rTMnFJA1tCOPwRxtgF4wd7Ab2qvDbL8jX+3smjIbS4HlZBagTlpERbdN7iAbWlrfxE3M8c27kTwTawQ7st+OQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"import-fresh\": \"^3.2.1\",\n" +
        "        \"js-yaml\": \"^4.1.0\",\n" +
        "        \"parse-json\": \"^5.0.0\",\n" +
        "        \"path-type\": \"^4.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=14\"\n" +
        "      },\n" +
        "      \"funding\": {\n" +
        "        \"url\": \"https://github.com/sponsors/d-fischer\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/cross-fetch\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/cross-fetch/-/cross-fetch-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-e4a5N8lVvuLgAWgnCrLr2PP0YyDOTHa9H/Rj54dirp61qXnNq46m82bRhNqIA5VccJtWBvPTFRV3TtvHUKPB1g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"node-fetch\": \"^2.6.12\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/debug\": {\n" +
        "      \"version\": \"4.3.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/debug/-/debug-4.3.4.tgz\",\n" +
        "      \"integrity\": \"sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"ms\": \"2.1.2\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6.0\"\n" +
        "      },\n" +
        "      \"peerDependenciesMeta\": {\n" +
        "        \"supports-color\": {\n" +
        "          \"optional\": true\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress\": {\n" +
        "      \"version\": \"4.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress/-/decompress-4.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-e48kc2IjU+2Zw8cTb6VZcJQ3lgVbS4uuB1TfCHbiZIP/haNXm+SVyhu+87jts5/3ROpd82GSVCoNs/z8l4ZOaQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"decompress-tar\": \"^4.0.0\",\n" +
        "        \"decompress-tarbz2\": \"^4.0.0\",\n" +
        "        \"decompress-targz\": \"^4.0.0\",\n" +
        "        \"decompress-unzip\": \"^4.0.1\",\n" +
        "        \"graceful-fs\": \"^4.1.10\",\n" +
        "        \"make-dir\": \"^1.0.0\",\n" +
        "        \"pify\": \"^2.3.0\",\n" +
        "        \"strip-dirs\": \"^2.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-tar\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-tar/-/decompress-tar-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-JdJMaCrGpB5fESVyxwpCx4Jdj2AagLmv3y58Qy4GE6HMVjWz1FeVQk1Ct4Kye7PftcdOo/7U7UKzYBJgqnGeUQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"file-type\": \"^5.2.0\",\n" +
        "        \"is-stream\": \"^1.1.0\",\n" +
        "        \"tar-stream\": \"^1.5.2\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-tar/node_modules/tar-stream\": {\n" +
        "      \"version\": \"1.6.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tar-stream/-/tar-stream-1.6.2.tgz\",\n" +
        "      \"integrity\": \"sha512-rzS0heiNf8Xn7/mpdSVVSMAWAoy9bfb1WOTYC78Z0UQKeKa/CWS8FOq0lKGNa8DWKAn9gxjCvMLYc5PGXYlK2A==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"bl\": \"^1.0.0\",\n" +
        "        \"buffer-alloc\": \"^1.2.0\",\n" +
        "        \"end-of-stream\": \"^1.0.0\",\n" +
        "        \"fs-constants\": \"^1.0.0\",\n" +
        "        \"readable-stream\": \"^2.3.0\",\n" +
        "        \"to-buffer\": \"^1.1.1\",\n" +
        "        \"xtend\": \"^4.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 0.8.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-tarbz2\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-tarbz2/-/decompress-tarbz2-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-s88xLzf1r81ICXLAVQVzaN6ZmX4A6U4z2nMbOwobxkLoIIfjVMBg7TeguTUXkKeXni795B6y5rnvDw7rxhAq9A==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"decompress-tar\": \"^4.1.0\",\n" +
        "        \"file-type\": \"^6.1.0\",\n" +
        "        \"is-stream\": \"^1.1.0\",\n" +
        "        \"seek-bzip\": \"^1.0.5\",\n" +
        "        \"unbzip2-stream\": \"^1.0.9\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-tarbz2/node_modules/file-type\": {\n" +
        "      \"version\": \"6.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/file-type/-/file-type-6.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-YPcTBDV+2Tm0VqjybVd32MHdlEGAtuxS3VAYsumFokDSMG+ROT5wawGlnHDoz7bfMcMDt9hxuXvXwoKUx2fkOg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-targz\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-targz/-/decompress-targz-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-4z81Znfr6chWnRDNfFNqLwPvm4db3WuZkqV+UgXQzSngG3CEKdBkw5jrv3axjjL96glyiiKjsxJG3X6WBZwX3w==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"decompress-tar\": \"^4.1.1\",\n" +
        "        \"file-type\": \"^5.2.0\",\n" +
        "        \"is-stream\": \"^1.1.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-unzip\": {\n" +
        "      \"version\": \"4.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-unzip/-/decompress-unzip-4.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-1fqeluvxgnn86MOh66u8FjbtJpAFv5wgCT9Iw8rcBqQcCo5tO8eiJw7NNTrvt9n4CRBVq7CstiS922oPgyGLrw==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"file-type\": \"^3.8.0\",\n" +
        "        \"get-stream\": \"^2.2.0\",\n" +
        "        \"pify\": \"^2.3.0\",\n" +
        "        \"yauzl\": \"^2.4.2\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-unzip/node_modules/file-type\": {\n" +
        "      \"version\": \"3.9.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz\",\n" +
        "      \"integrity\": \"sha512-RLoqTXE8/vPmMuTI88DAzhMYC99I8BWv7zYP4A1puo5HIjEJ5EX48ighy4ZyKMG9EDXxBgW6e++cn7d1xuFghA==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/decompress-unzip/node_modules/get-stream\": {\n" +
        "      \"version\": \"2.3.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/get-stream/-/get-stream-2.3.1.tgz\",\n" +
        "      \"integrity\": \"sha512-AUGhbbemXxrZJRD5cDvKtQxLuYaIbNtDTK8YqupCI393Q2KSTreEsLUN3ZxAWFGiKTzL6nKuzfcIvieflUX9qA==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"object-assign\": \"^4.0.1\",\n" +
        "        \"pinkie-promise\": \"^2.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/devtools-protocol\": {\n" +
        "      \"version\": \"0.0.1135028\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1135028.tgz\",\n" +
        "      \"integrity\": \"sha512-jEcNGrh6lOXNRJvZb9RjeevtZGrgugPKSMJZxfyxWQnhlKawMPhMtk/dfC+Z/6xNXExlzTKlY5LzIAK/fRpQIw==\"\n" +
        "    },\n" +
        "    \"node_modules/emoji-regex\": {\n" +
        "      \"version\": \"8.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==\"\n" +
        "    },\n" +
        "    \"node_modules/end-of-stream\": {\n" +
        "      \"version\": \"1.4.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz\",\n" +
        "      \"integrity\": \"sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"once\": \"^1.4.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/error-ex\": {\n" +
        "      \"version\": \"1.3.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz\",\n" +
        "      \"integrity\": \"sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"is-arrayish\": \"^0.2.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/escalade\": {\n" +
        "      \"version\": \"3.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/escape-string-regexp\": {\n" +
        "      \"version\": \"1.0.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz\",\n" +
        "      \"integrity\": \"sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.8.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/extract-zip\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/extract-zip/-/extract-zip-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-GDhU9ntwuKyGXdZBUgTIe+vXnWj0fppUEtMDL0+idd5Sta8TGpHssn/eusA9mrPr9qNDym6SxAYZjNvCn/9RBg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"debug\": \"^4.1.1\",\n" +
        "        \"get-stream\": \"^5.1.0\",\n" +
        "        \"yauzl\": \"^2.10.0\"\n" +
        "      },\n" +
        "      \"bin\": {\n" +
        "        \"extract-zip\": \"cli.js\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 10.17.0\"\n" +
        "      },\n" +
        "      \"optionalDependencies\": {\n" +
        "        \"@types/yauzl\": \"^2.9.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/fast-fifo\": {\n" +
        "      \"version\": \"1.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-IgfweLvEpwyA4WgiQe9Nx6VV2QkML2NkvZnk1oKnIzXgXdWxuhF7zw4DvLTPZJn6PIUneiAXPF24QmoEqHTjyw==\"\n" +
        "    },\n" +
        "    \"node_modules/fd-slicer\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"pend\": \"~1.2.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/file-type\": {\n" +
        "      \"version\": \"5.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/file-type/-/file-type-5.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-Iq1nJ6D2+yIO4c8HHg4fyVb8mAJieo1Oloy1mLLaB2PvezNedhBVm+QU7g0qM42aiMbRXTxKKwGD17rjKNJYVQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/fs-constants\": {\n" +
        "      \"version\": \"1.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==\"\n" +
        "    },\n" +
        "    \"node_modules/get-caller-file\": {\n" +
        "      \"version\": \"2.0.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz\",\n" +
        "      \"integrity\": \"sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \"6.* || 8.* || >= 10.*\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/get-stream\": {\n" +
        "      \"version\": \"5.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"pump\": \"^3.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      },\n" +
        "      \"funding\": {\n" +
        "        \"url\": \"https://github.com/sponsors/sindresorhus\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/graceful-fs\": {\n" +
        "      \"version\": \"4.2.11\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz\",\n" +
        "      \"integrity\": \"sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==\"\n" +
        "    },\n" +
        "    \"node_modules/has-flag\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/http-proxy-agent\": {\n" +
        "      \"version\": \"7.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-+ZT+iBxVUQ1asugqnD6oWoRiS25AkjNfG085dKJGtGxkdwLQrMKU5wJr2bOOFAXzKcTuqq+7fZlTMgG3SRfIYQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"agent-base\": \"^7.1.0\",\n" +
        "        \"debug\": \"^4.3.4\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 14\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/https-proxy-agent\": {\n" +
        "      \"version\": \"7.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-Eun8zV0kcYS1g19r78osiQLEFIRspRUDd9tIfBCTBPBeMieF/EsJNL8VI3xOIdYRDEkjQnqOYPsZ2DsWsVsFwQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"agent-base\": \"^7.0.2\",\n" +
        "        \"debug\": \"4\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 14\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/ieee754\": {\n" +
        "      \"version\": \"1.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==\",\n" +
        "      \"funding\": [\n" +
        "        {\n" +
        "          \"type\": \"github\",\n" +
        "          \"url\": \"https://github.com/sponsors/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"patreon\",\n" +
        "          \"url\": \"https://www.patreon.com/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"consulting\",\n" +
        "          \"url\": \"https://feross.org/support\"\n" +
        "        }\n" +
        "      ]\n" +
        "    },\n" +
        "    \"node_modules/import-fresh\": {\n" +
        "      \"version\": \"3.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"parent-module\": \"^1.0.0\",\n" +
        "        \"resolve-from\": \"^4.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6\"\n" +
        "      },\n" +
        "      \"funding\": {\n" +
        "        \"url\": \"https://github.com/sponsors/sindresorhus\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/inherits\": {\n" +
        "      \"version\": \"2.0.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz\",\n" +
        "      \"integrity\": \"sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==\"\n" +
        "    },\n" +
        "    \"node_modules/ip\": {\n" +
        "      \"version\": \"2.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ip/-/ip-2.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-WKa+XuLG1A1R0UWhl2+1XQSi+fZWMsYKffMZTTYsiZaUD8k2yDAj5atimTUD2TZkyCkNEeYE5NhFZmupOGtjYQ==\"\n" +
        "    },\n" +
        "    \"node_modules/is-arrayish\": {\n" +
        "      \"version\": \"0.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==\"\n" +
        "    },\n" +
        "    \"node_modules/is-fullwidth-code-point\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/is-natural-number\": {\n" +
        "      \"version\": \"4.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-natural-number/-/is-natural-number-4.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-Y4LTamMe0DDQIIAlaer9eKebAlDSV6huy+TWhJVPlzZh2o4tRP5SQWFlLn5N0To4mDD22/qdOq+veo1cSISLgQ==\"\n" +
        "    },\n" +
        "    \"node_modules/is-stream\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-uQPm8kcs47jx38atAcWTVxyltQYoPT68y9aWYdV6yWXSyW8mzSat0TL6CiWdZeCdF3KrAvpVtnHbTv4RN+rqdQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/isarray\": {\n" +
        "      \"version\": \"1.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==\"\n" +
        "    },\n" +
        "    \"node_modules/js-tokens\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==\"\n" +
        "    },\n" +
        "    \"node_modules/js-yaml\": {\n" +
        "      \"version\": \"4.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"argparse\": \"^2.0.1\"\n" +
        "      },\n" +
        "      \"bin\": {\n" +
        "        \"js-yaml\": \"bin/js-yaml.js\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/json-parse-even-better-errors\": {\n" +
        "      \"version\": \"2.3.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz\",\n" +
        "      \"integrity\": \"sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==\"\n" +
        "    },\n" +
        "    \"node_modules/lines-and-columns\": {\n" +
        "      \"version\": \"1.2.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz\",\n" +
        "      \"integrity\": \"sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==\"\n" +
        "    },\n" +
        "    \"node_modules/make-dir\": {\n" +
        "      \"version\": \"1.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"pify\": \"^3.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/make-dir/node_modules/pify\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pify/-/pify-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-C3FsVNH1udSEX48gGX1xfvwTWfsYWj5U+8/uK15BGzIGrKoUpghX8hWZwa/OFnakBiiVNmBvemTJR5mcy7iPcg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/mitt\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/mitt/-/mitt-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-7dX2/10ITVyqh4aOSVI9gdape+t9l2/8QxHrFmUXu4EEUpdlxl6RudZUPZoc+zuY2hk1j7XxVroIVIan/pD/SQ==\"\n" +
        "    },\n" +
        "    \"node_modules/mkdirp-classic\": {\n" +
        "      \"version\": \"0.5.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz\",\n" +
        "      \"integrity\": \"sha512-gKLcREMhtuZRwRAfqP3RFW+TK4JqApVBtOIftVgjuABpAtpxhPGaDcfvbhNvD0B8iD1oUr/txX35NjcaY6Ns/A==\"\n" +
        "    },\n" +
        "    \"node_modules/ms\": {\n" +
        "      \"version\": \"2.1.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ms/-/ms-2.1.2.tgz\",\n" +
        "      \"integrity\": \"sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==\"\n" +
        "    },\n" +
        "    \"node_modules/node-fetch\": {\n" +
        "      \"version\": \"2.6.12\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.12.tgz\",\n" +
        "      \"integrity\": \"sha512-C/fGU2E8ToujUivIO0H+tpQ6HWo4eEmchoPIoXtxCrVghxdKq+QOHqEZW7tuP3KlV3bC8FRMO5nMCC7Zm1VP6g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"whatwg-url\": \"^5.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \"4.x || >=6.0.0\"\n" +
        "      },\n" +
        "      \"peerDependencies\": {\n" +
        "        \"encoding\": \"^0.1.0\"\n" +
        "      },\n" +
        "      \"peerDependenciesMeta\": {\n" +
        "        \"encoding\": {\n" +
        "          \"optional\": true\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/object-assign\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/once\": {\n" +
        "      \"version\": \"1.4.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/once/-/once-1.4.0.tgz\",\n" +
        "      \"integrity\": \"sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"wrappy\": \"1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/parent-module\": {\n" +
        "      \"version\": \"1.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"callsites\": \"^3.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=6\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/parse-json\": {\n" +
        "      \"version\": \"5.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"@babel/code-frame\": \"^7.0.0\",\n" +
        "        \"error-ex\": \"^1.3.1\",\n" +
        "        \"json-parse-even-better-errors\": \"^2.3.0\",\n" +
        "        \"lines-and-columns\": \"^1.1.6\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      },\n" +
        "      \"funding\": {\n" +
        "        \"url\": \"https://github.com/sponsors/sindresorhus\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/path-type\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/pend\": {\n" +
        "      \"version\": \"1.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pend/-/pend-1.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==\"\n" +
        "    },\n" +
        "    \"node_modules/pify\": {\n" +
        "      \"version\": \"2.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pify/-/pify-2.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/pinkie\": {\n" +
        "      \"version\": \"2.0.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz\",\n" +
        "      \"integrity\": \"sha512-MnUuEycAemtSaeFSjXKW/aroV7akBbY+Sv+RkyqFjgAe73F+MR0TBWKBRDkmfWq/HiFmdavfZ1G7h4SPZXaCSg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/pinkie-promise\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-0Gni6D4UcLTbv9c57DfxDGdr41XfgUjqWZu492f0cIGr16zDU06BWP/RAEvOuo7CQ0CNjHaLlM59YJJFm3NWlw==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"pinkie\": \"^2.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/process-nextick-args\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==\"\n" +
        "    },\n" +
        "    \"node_modules/progress\": {\n" +
        "      \"version\": \"2.0.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/progress/-/progress-2.0.3.tgz\",\n" +
        "      \"integrity\": \"sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.4.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/proxy-from-env\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==\"\n" +
        "    },\n" +
        "    \"node_modules/pump\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pump/-/pump-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"end-of-stream\": \"^1.1.0\",\n" +
        "        \"once\": \"^1.3.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/puppeteer\": {\n" +
        "      \"version\": \"20.8.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/puppeteer/-/puppeteer-20.8.2.tgz\",\n" +
        "      \"integrity\": \"sha512-+VRywTRGF09UyiesFL7pcU19Cq7vf2HsE/eulwSpl7YHcr8g8X+Va4qLmp7mOECwteGvP7rU8vQ7PP43fcubbA==\",\n" +
        "      \"hasInstallScript\": true,\n" +
        "      \"dependencies\": {\n" +
        "        \"@puppeteer/browsers\": \"1.4.5\",\n" +
        "        \"cosmiconfig\": \"8.2.0\",\n" +
        "        \"puppeteer-core\": \"20.8.2\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=16.3.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/puppeteer-core\": {\n" +
        "      \"version\": \"20.8.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-20.8.2.tgz\",\n" +
        "      \"integrity\": \"sha512-dWo60gFuFPdNhdabW9MMm6GpvkG6tND2D8FvrZ2MF+HggNApHrvLfbERj8vD6vXKV7UqDAJO0KI1OMo3S3Cm5w==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"@puppeteer/browsers\": \"1.4.5\",\n" +
        "        \"chromium-bidi\": \"0.4.16\",\n" +
        "        \"cross-fetch\": \"4.0.0\",\n" +
        "        \"debug\": \"4.3.4\",\n" +
        "        \"devtools-protocol\": \"0.0.1135028\",\n" +
        "        \"ws\": \"8.13.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=16.3.0\"\n" +
        "      },\n" +
        "      \"peerDependencies\": {\n" +
        "        \"typescript\": \">= 4.7.4\"\n" +
        "      },\n" +
        "      \"peerDependenciesMeta\": {\n" +
        "        \"typescript\": {\n" +
        "          \"optional\": true\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/queue-tick\": {\n" +
        "      \"version\": \"1.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/queue-tick/-/queue-tick-1.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-kJt5qhMxoszgU/62PLP1CJytzd2NKetjSRnyuj31fDd3Rlcz3fzlFdFLD1SItunPwyqEOkca6GbV612BWfaBag==\"\n" +
        "    },\n" +
        "    \"node_modules/readable-stream\": {\n" +
        "      \"version\": \"2.3.8\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz\",\n" +
        "      \"integrity\": \"sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"core-util-is\": \"~1.0.0\",\n" +
        "        \"inherits\": \"~2.0.3\",\n" +
        "        \"isarray\": \"~1.0.0\",\n" +
        "        \"process-nextick-args\": \"~2.0.0\",\n" +
        "        \"safe-buffer\": \"~5.1.1\",\n" +
        "        \"string_decoder\": \"~1.1.1\",\n" +
        "        \"util-deprecate\": \"~1.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/readable-stream/node_modules/safe-buffer\": {\n" +
        "      \"version\": \"5.1.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz\",\n" +
        "      \"integrity\": \"sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==\"\n" +
        "    },\n" +
        "    \"node_modules/require-directory\": {\n" +
        "      \"version\": \"2.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/resolve-from\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/safe-buffer\": {\n" +
        "      \"version\": \"5.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==\",\n" +
        "      \"funding\": [\n" +
        "        {\n" +
        "          \"type\": \"github\",\n" +
        "          \"url\": \"https://github.com/sponsors/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"patreon\",\n" +
        "          \"url\": \"https://www.patreon.com/feross\"\n" +
        "        },\n" +
        "        {\n" +
        "          \"type\": \"consulting\",\n" +
        "          \"url\": \"https://feross.org/support\"\n" +
        "        }\n" +
        "      ]\n" +
        "    },\n" +
        "    \"node_modules/seek-bzip\": {\n" +
        "      \"version\": \"1.0.6\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/seek-bzip/-/seek-bzip-1.0.6.tgz\",\n" +
        "      \"integrity\": \"sha512-e1QtP3YL5tWww8uKaOCQ18UxIT2laNBXHjV/S2WYCiK4udiv8lkG89KRIoCjUagnAmCBurjF4zEVX2ByBbnCjQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"commander\": \"^2.8.1\"\n" +
        "      },\n" +
        "      \"bin\": {\n" +
        "        \"seek-bunzip\": \"bin/seek-bunzip\",\n" +
        "        \"seek-table\": \"bin/seek-bzip-table\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/smart-buffer\": {\n" +
        "      \"version\": \"4.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 6.0.0\",\n" +
        "        \"npm\": \">= 3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/socks\": {\n" +
        "      \"version\": \"2.7.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/socks/-/socks-2.7.1.tgz\",\n" +
        "      \"integrity\": \"sha512-7maUZy1N7uo6+WVEX6psASxtNlKaNVMlGQKkG/63nEDdLOWNbiUMoLK7X4uYoLhQstau72mLgfEWcXcwsaHbYQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"ip\": \"^2.0.0\",\n" +
        "        \"smart-buffer\": \"^4.2.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 10.13.0\",\n" +
        "        \"npm\": \">= 3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/socks-proxy-agent\": {\n" +
        "      \"version\": \"8.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-59EjPbbgg8U3x62hhKOFVAmySQUcfRQ4C7Q/D5sEHnZTQRrQlNKINks44DMR1gwXp0p4LaVIeccX2KHTTcHVqQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"agent-base\": \"^7.0.1\",\n" +
        "        \"debug\": \"^4.3.4\",\n" +
        "        \"socks\": \"^2.7.1\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">= 14\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/streamx\": {\n" +
        "      \"version\": \"2.15.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/streamx/-/streamx-2.15.0.tgz\",\n" +
        "      \"integrity\": \"sha512-HcxY6ncGjjklGs1xsP1aR71INYcsXFJet5CU1CHqihQ2J5nOsbd4OjgjHO42w/4QNv9gZb3BueV+Vxok5pLEXg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"fast-fifo\": \"^1.1.0\",\n" +
        "        \"queue-tick\": \"^1.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/string_decoder\": {\n" +
        "      \"version\": \"1.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"safe-buffer\": \"~5.1.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/string_decoder/node_modules/safe-buffer\": {\n" +
        "      \"version\": \"5.1.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz\",\n" +
        "      \"integrity\": \"sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==\"\n" +
        "    },\n" +
        "    \"node_modules/string-width\": {\n" +
        "      \"version\": \"4.2.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz\",\n" +
        "      \"integrity\": \"sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"emoji-regex\": \"^8.0.0\",\n" +
        "        \"is-fullwidth-code-point\": \"^3.0.0\",\n" +
        "        \"strip-ansi\": \"^6.0.1\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/strip-ansi\": {\n" +
        "      \"version\": \"6.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"ansi-regex\": \"^5.0.1\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/strip-dirs\": {\n" +
        "      \"version\": \"2.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/strip-dirs/-/strip-dirs-2.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-JOCxOeKLm2CAS73y/U4ZeZPTkE+gNVCzKt7Eox84Iej1LT/2pTWYpZKJuxwQpvX1LiZb1xokNR7RLfuBAa7T3g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"is-natural-number\": \"^4.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/supports-color\": {\n" +
        "      \"version\": \"5.5.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz\",\n" +
        "      \"integrity\": \"sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"has-flag\": \"^3.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/tar-fs\": {\n" +
        "      \"version\": \"3.0.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tar-fs/-/tar-fs-3.0.4.tgz\",\n" +
        "      \"integrity\": \"sha512-5AFQU8b9qLfZCX9zp2duONhPmZv0hGYiBPJsyUdqMjzq/mqVpy/rEUSeHk1+YitmxugaptgBh5oDGU3VsAJq4w==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"mkdirp-classic\": \"^0.5.2\",\n" +
        "        \"pump\": \"^3.0.0\",\n" +
        "        \"tar-stream\": \"^3.1.5\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/tar-stream\": {\n" +
        "      \"version\": \"3.1.6\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tar-stream/-/tar-stream-3.1.6.tgz\",\n" +
        "      \"integrity\": \"sha512-B/UyjYwPpMBv+PaFSWAmtYjwdrlEaZQEhMIBFNC5oEG8lpiW8XjcSdmEaClj28ArfKScKHs2nshz3k2le6crsg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"b4a\": \"^1.6.4\",\n" +
        "        \"fast-fifo\": \"^1.2.0\",\n" +
        "        \"streamx\": \"^2.15.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/through\": {\n" +
        "      \"version\": \"2.3.8\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/through/-/through-2.3.8.tgz\",\n" +
        "      \"integrity\": \"sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==\"\n" +
        "    },\n" +
        "    \"node_modules/to-buffer\": {\n" +
        "      \"version\": \"1.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/to-buffer/-/to-buffer-1.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-lx9B5iv7msuFYE3dytT+KE5tap+rNYw+K4jVkb9R/asAb+pbBSM17jtunHplhBe6RRJdZx3Pn2Jph24O32mOVg==\"\n" +
        "    },\n" +
        "    \"node_modules/tr46\": {\n" +
        "      \"version\": \"0.0.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz\",\n" +
        "      \"integrity\": \"sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==\"\n" +
        "    },\n" +
        "    \"node_modules/unbzip2-stream\": {\n" +
        "      \"version\": \"1.4.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/unbzip2-stream/-/unbzip2-stream-1.4.3.tgz\",\n" +
        "      \"integrity\": \"sha512-mlExGW4w71ebDJviH16lQLtZS32VKqsSfk80GCfUlwT/4/hNRFsoscrF/c++9xinkMzECL1uL9DDwXqFWkruPg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"buffer\": \"^5.2.1\",\n" +
        "        \"through\": \"^2.3.8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/util-deprecate\": {\n" +
        "      \"version\": \"1.0.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz\",\n" +
        "      \"integrity\": \"sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==\"\n" +
        "    },\n" +
        "    \"node_modules/webidl-conversions\": {\n" +
        "      \"version\": \"3.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==\"\n" +
        "    },\n" +
        "    \"node_modules/whatwg-url\": {\n" +
        "      \"version\": \"5.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"tr46\": \"~0.0.3\",\n" +
        "        \"webidl-conversions\": \"^3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/wrap-ansi\": {\n" +
        "      \"version\": \"7.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"ansi-styles\": \"^4.0.0\",\n" +
        "        \"string-width\": \"^4.1.0\",\n" +
        "        \"strip-ansi\": \"^6.0.0\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=10\"\n" +
        "      },\n" +
        "      \"funding\": {\n" +
        "        \"url\": \"https://github.com/chalk/wrap-ansi?sponsor=1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/wrap-ansi/node_modules/ansi-styles\": {\n" +
        "      \"version\": \"4.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"color-convert\": \"^2.0.1\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=8\"\n" +
        "      },\n" +
        "      \"funding\": {\n" +
        "        \"url\": \"https://github.com/chalk/ansi-styles?sponsor=1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/wrap-ansi/node_modules/color-convert\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"color-name\": \"~1.1.4\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=7.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/wrap-ansi/node_modules/color-name\": {\n" +
        "      \"version\": \"1.1.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz\",\n" +
        "      \"integrity\": \"sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==\"\n" +
        "    },\n" +
        "    \"node_modules/wrappy\": {\n" +
        "      \"version\": \"1.0.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz\",\n" +
        "      \"integrity\": \"sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==\"\n" +
        "    },\n" +
        "    \"node_modules/ws\": {\n" +
        "      \"version\": \"8.13.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ws/-/ws-8.13.0.tgz\",\n" +
        "      \"integrity\": \"sha512-x9vcZYTrFPC7aSIbj7sRCYo7L/Xb8Iy+pW0ng0wt2vCJv7M9HOMy0UoN3rr+IFC7hb7vXoqS+P9ktyLLLhO+LA==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=10.0.0\"\n" +
        "      },\n" +
        "      \"peerDependencies\": {\n" +
        "        \"bufferutil\": \"^4.0.1\",\n" +
        "        \"utf-8-validate\": \">=5.0.2\"\n" +
        "      },\n" +
        "      \"peerDependenciesMeta\": {\n" +
        "        \"bufferutil\": {\n" +
        "          \"optional\": true\n" +
        "        },\n" +
        "        \"utf-8-validate\": {\n" +
        "          \"optional\": true\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/xtend\": {\n" +
        "      \"version\": \"4.0.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz\",\n" +
        "      \"integrity\": \"sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=0.4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/y18n\": {\n" +
        "      \"version\": \"5.0.8\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz\",\n" +
        "      \"integrity\": \"sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=10\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/yargs\": {\n" +
        "      \"version\": \"17.7.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/yargs/-/yargs-17.7.1.tgz\",\n" +
        "      \"integrity\": \"sha512-cwiTb08Xuv5fqF4AovYacTFNxk62th7LKJ6BL9IGUpTJrWoU7/7WdQGTP2SjKf1dUNBGzDd28p/Yfs/GI6JrLw==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"cliui\": \"^8.0.1\",\n" +
        "        \"escalade\": \"^3.1.1\",\n" +
        "        \"get-caller-file\": \"^2.0.5\",\n" +
        "        \"require-directory\": \"^2.1.1\",\n" +
        "        \"string-width\": \"^4.2.3\",\n" +
        "        \"y18n\": \"^5.0.5\",\n" +
        "        \"yargs-parser\": \"^21.1.1\"\n" +
        "      },\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=12\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/yargs-parser\": {\n" +
        "      \"version\": \"21.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==\",\n" +
        "      \"engines\": {\n" +
        "        \"node\": \">=12\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"node_modules/yauzl\": {\n" +
        "      \"version\": \"2.10.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz\",\n" +
        "      \"integrity\": \"sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==\",\n" +
        "      \"dependencies\": {\n" +
        "        \"buffer-crc32\": \"~0.2.3\",\n" +
        "        \"fd-slicer\": \"~1.1.0\"\n" +
        "      }\n" +
        "    }\n" +
        "  },\n" +
        "  \"dependencies\": {\n" +
        "    \"@babel/code-frame\": {\n" +
        "      \"version\": \"7.22.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.22.5.tgz\",\n" +
        "      \"integrity\": \"sha512-Xmwn266vad+6DAqEB2A6V/CcZVp62BbwVmcOJc2RPuwih1kw02TjQvWVWlcKGbBPd+8/0V5DEkOcizRGYsspYQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"@babel/highlight\": \"^7.22.5\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"@babel/helper-validator-identifier\": {\n" +
        "      \"version\": \"7.22.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.22.5.tgz\",\n" +
        "      \"integrity\": \"sha512-aJXu+6lErq8ltp+JhkJUfk1MTGyuA4v7f3pA+BJ5HLfNC6nAQ0Cpi9uOquUj8Hehg0aUiHzWQbOVJGao6ztBAQ==\"\n" +
        "    },\n" +
        "    \"@babel/highlight\": {\n" +
        "      \"version\": \"7.22.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@babel/highlight/-/highlight-7.22.5.tgz\",\n" +
        "      \"integrity\": \"sha512-BSKlD1hgnedS5XRnGOljZawtag7H1yPfQp0tdNJCHoH6AZ+Pcm9VvkrK59/Yy593Ypg0zMxH2BxD1VPYUQ7UIw==\",\n" +
        "      \"requires\": {\n" +
        "        \"@babel/helper-validator-identifier\": \"^7.22.5\",\n" +
        "        \"chalk\": \"^2.0.0\",\n" +
        "        \"js-tokens\": \"^4.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"@puppeteer/browsers\": {\n" +
        "      \"version\": \"1.4.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/@puppeteer/browsers/-/browsers-1.4.5.tgz\",\n" +
        "      \"integrity\": \"sha512-a0gpUa+XlxZHotoOklh99X6RC5R+hQGcVcYOH+oOIEBfQXPp8Z5c765XAu/zhxsjRuAZN4Xx4vZNlwN4wJro2A==\",\n" +
        "      \"requires\": {\n" +
        "        \"debug\": \"4.3.4\",\n" +
        "        \"extract-zip\": \"2.0.1\",\n" +
        "        \"http-proxy-agent\": \"7.0.0\",\n" +
        "        \"https-proxy-agent\": \"7.0.1\",\n" +
        "        \"progress\": \"2.0.3\",\n" +
        "        \"proxy-from-env\": \"1.1.0\",\n" +
        "        \"socks-proxy-agent\": \"8.0.1\",\n" +
        "        \"tar-fs\": \"3.0.4\",\n" +
        "        \"unbzip2-stream\": \"1.4.3\",\n" +
        "        \"yargs\": \"17.7.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"adm-zip\": {\n" +
        "      \"version\": \"0.5.10\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/adm-zip/-/adm-zip-0.5.10.tgz\",\n" +
        "      \"integrity\": \"sha512-x0HvcHqVJNTPk/Bw8JbLWlWoo6Wwnsug0fnYYro1HBrjxZ3G7/AZk7Ahv8JwDe1uIcz8eBqvu86FuF1POiG7vQ==\"\n" +
        "    },\n" +
        "    \"agent-base\": {\n" +
        "      \"version\": \"7.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/agent-base/-/agent-base-7.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-o/zjMZRhJxny7OyEF+Op8X+efiELC7k7yOjMzgfzVqOzXqkBkWI79YoTdOtsuWd5BWhAGAuOY/Xa6xpiaWXiNg==\",\n" +
        "      \"requires\": {\n" +
        "        \"debug\": \"^4.3.4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"ansi-regex\": {\n" +
        "      \"version\": \"5.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==\"\n" +
        "    },\n" +
        "    \"ansi-styles\": {\n" +
        "      \"version\": \"3.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==\",\n" +
        "      \"requires\": {\n" +
        "        \"color-convert\": \"^1.9.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"argparse\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==\"\n" +
        "    },\n" +
        "    \"b4a\": {\n" +
        "      \"version\": \"1.6.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/b4a/-/b4a-1.6.4.tgz\",\n" +
        "      \"integrity\": \"sha512-fpWrvyVHEKyeEvbKZTVOeZF3VSKKWtJxFIxX/jaVPf+cLbGUSitjb49pHLqPV2BUNNZ0LcoeEGfE/YCpyDYHIw==\"\n" +
        "    },\n" +
        "    \"base64-js\": {\n" +
        "      \"version\": \"1.5.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz\",\n" +
        "      \"integrity\": \"sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==\"\n" +
        "    },\n" +
        "    \"bl\": {\n" +
        "      \"version\": \"1.2.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/bl/-/bl-1.2.3.tgz\",\n" +
        "      \"integrity\": \"sha512-pvcNpa0UU69UT341rO6AYy4FVAIkUHuZXRIWbq+zHnsVcRzDDjIAhGuuYoi0d//cwIwtt4pkpKycWEfjdV+vww==\",\n" +
        "      \"requires\": {\n" +
        "        \"readable-stream\": \"^2.3.5\",\n" +
        "        \"safe-buffer\": \"^5.1.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"buffer\": {\n" +
        "      \"version\": \"5.7.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz\",\n" +
        "      \"integrity\": \"sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"base64-js\": \"^1.3.1\",\n" +
        "        \"ieee754\": \"^1.1.13\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"buffer-alloc\": {\n" +
        "      \"version\": \"1.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==\",\n" +
        "      \"requires\": {\n" +
        "        \"buffer-alloc-unsafe\": \"^1.1.0\",\n" +
        "        \"buffer-fill\": \"^1.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"buffer-alloc-unsafe\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg==\"\n" +
        "    },\n" +
        "    \"buffer-crc32\": {\n" +
        "      \"version\": \"0.2.13\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz\",\n" +
        "      \"integrity\": \"sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==\"\n" +
        "    },\n" +
        "    \"buffer-fill\": {\n" +
        "      \"version\": \"1.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-T7zexNBwiiaCOGDg9xNX9PBmjrubblRkENuptryuI64URkXDFum9il/JGL8Lm8wYfAXpredVXXZz7eMHilimiQ==\"\n" +
        "    },\n" +
        "    \"callsites\": {\n" +
        "      \"version\": \"3.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==\"\n" +
        "    },\n" +
        "    \"chalk\": {\n" +
        "      \"version\": \"2.4.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz\",\n" +
        "      \"integrity\": \"sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"ansi-styles\": \"^3.2.1\",\n" +
        "        \"escape-string-regexp\": \"^1.0.5\",\n" +
        "        \"supports-color\": \"^5.3.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"chromium-bidi\": {\n" +
        "      \"version\": \"0.4.16\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/chromium-bidi/-/chromium-bidi-0.4.16.tgz\",\n" +
        "      \"integrity\": \"sha512-7ZbXdWERxRxSwo3txsBjjmc/NLxqb1Bk30mRb0BMS4YIaiV6zvKZqL/UAH+DdqcDYayDWk2n/y8klkBDODrPvA==\",\n" +
        "      \"requires\": {\n" +
        "        \"mitt\": \"3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"cliui\": {\n" +
        "      \"version\": \"8.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"string-width\": \"^4.2.0\",\n" +
        "        \"strip-ansi\": \"^6.0.1\",\n" +
        "        \"wrap-ansi\": \"^7.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"color-convert\": {\n" +
        "      \"version\": \"1.9.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz\",\n" +
        "      \"integrity\": \"sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==\",\n" +
        "      \"requires\": {\n" +
        "        \"color-name\": \"1.1.3\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"color-name\": {\n" +
        "      \"version\": \"1.1.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz\",\n" +
        "      \"integrity\": \"sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==\"\n" +
        "    },\n" +
        "    \"commander\": {\n" +
        "      \"version\": \"2.20.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/commander/-/commander-2.20.3.tgz\",\n" +
        "      \"integrity\": \"sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==\"\n" +
        "    },\n" +
        "    \"core-util-is\": {\n" +
        "      \"version\": \"1.0.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz\",\n" +
        "      \"integrity\": \"sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==\"\n" +
        "    },\n" +
        "    \"cosmiconfig\": {\n" +
        "      \"version\": \"8.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-8.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-3rTMnFJA1tCOPwRxtgF4wd7Ab2qvDbL8jX+3smjIbS4HlZBagTlpERbdN7iAbWlrfxE3M8c27kTwTawQ7st+OQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"import-fresh\": \"^3.2.1\",\n" +
        "        \"js-yaml\": \"^4.1.0\",\n" +
        "        \"parse-json\": \"^5.0.0\",\n" +
        "        \"path-type\": \"^4.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"cross-fetch\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/cross-fetch/-/cross-fetch-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-e4a5N8lVvuLgAWgnCrLr2PP0YyDOTHa9H/Rj54dirp61qXnNq46m82bRhNqIA5VccJtWBvPTFRV3TtvHUKPB1g==\",\n" +
        "      \"requires\": {\n" +
        "        \"node-fetch\": \"^2.6.12\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"debug\": {\n" +
        "      \"version\": \"4.3.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/debug/-/debug-4.3.4.tgz\",\n" +
        "      \"integrity\": \"sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"ms\": \"2.1.2\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"decompress\": {\n" +
        "      \"version\": \"4.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress/-/decompress-4.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-e48kc2IjU+2Zw8cTb6VZcJQ3lgVbS4uuB1TfCHbiZIP/haNXm+SVyhu+87jts5/3ROpd82GSVCoNs/z8l4ZOaQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"decompress-tar\": \"^4.0.0\",\n" +
        "        \"decompress-tarbz2\": \"^4.0.0\",\n" +
        "        \"decompress-targz\": \"^4.0.0\",\n" +
        "        \"decompress-unzip\": \"^4.0.1\",\n" +
        "        \"graceful-fs\": \"^4.1.10\",\n" +
        "        \"make-dir\": \"^1.0.0\",\n" +
        "        \"pify\": \"^2.3.0\",\n" +
        "        \"strip-dirs\": \"^2.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"decompress-tar\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-tar/-/decompress-tar-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-JdJMaCrGpB5fESVyxwpCx4Jdj2AagLmv3y58Qy4GE6HMVjWz1FeVQk1Ct4Kye7PftcdOo/7U7UKzYBJgqnGeUQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"file-type\": \"^5.2.0\",\n" +
        "        \"is-stream\": \"^1.1.0\",\n" +
        "        \"tar-stream\": \"^1.5.2\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"tar-stream\": {\n" +
        "          \"version\": \"1.6.2\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/tar-stream/-/tar-stream-1.6.2.tgz\",\n" +
        "          \"integrity\": \"sha512-rzS0heiNf8Xn7/mpdSVVSMAWAoy9bfb1WOTYC78Z0UQKeKa/CWS8FOq0lKGNa8DWKAn9gxjCvMLYc5PGXYlK2A==\",\n" +
        "          \"requires\": {\n" +
        "            \"bl\": \"^1.0.0\",\n" +
        "            \"buffer-alloc\": \"^1.2.0\",\n" +
        "            \"end-of-stream\": \"^1.0.0\",\n" +
        "            \"fs-constants\": \"^1.0.0\",\n" +
        "            \"readable-stream\": \"^2.3.0\",\n" +
        "            \"to-buffer\": \"^1.1.1\",\n" +
        "            \"xtend\": \"^4.0.0\"\n" +
        "          }\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"decompress-tarbz2\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-tarbz2/-/decompress-tarbz2-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-s88xLzf1r81ICXLAVQVzaN6ZmX4A6U4z2nMbOwobxkLoIIfjVMBg7TeguTUXkKeXni795B6y5rnvDw7rxhAq9A==\",\n" +
        "      \"requires\": {\n" +
        "        \"decompress-tar\": \"^4.1.0\",\n" +
        "        \"file-type\": \"^6.1.0\",\n" +
        "        \"is-stream\": \"^1.1.0\",\n" +
        "        \"seek-bzip\": \"^1.0.5\",\n" +
        "        \"unbzip2-stream\": \"^1.0.9\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"file-type\": {\n" +
        "          \"version\": \"6.2.0\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/file-type/-/file-type-6.2.0.tgz\",\n" +
        "          \"integrity\": \"sha512-YPcTBDV+2Tm0VqjybVd32MHdlEGAtuxS3VAYsumFokDSMG+ROT5wawGlnHDoz7bfMcMDt9hxuXvXwoKUx2fkOg==\"\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"decompress-targz\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-targz/-/decompress-targz-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-4z81Znfr6chWnRDNfFNqLwPvm4db3WuZkqV+UgXQzSngG3CEKdBkw5jrv3axjjL96glyiiKjsxJG3X6WBZwX3w==\",\n" +
        "      \"requires\": {\n" +
        "        \"decompress-tar\": \"^4.1.1\",\n" +
        "        \"file-type\": \"^5.2.0\",\n" +
        "        \"is-stream\": \"^1.1.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"decompress-unzip\": {\n" +
        "      \"version\": \"4.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/decompress-unzip/-/decompress-unzip-4.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-1fqeluvxgnn86MOh66u8FjbtJpAFv5wgCT9Iw8rcBqQcCo5tO8eiJw7NNTrvt9n4CRBVq7CstiS922oPgyGLrw==\",\n" +
        "      \"requires\": {\n" +
        "        \"file-type\": \"^3.8.0\",\n" +
        "        \"get-stream\": \"^2.2.0\",\n" +
        "        \"pify\": \"^2.3.0\",\n" +
        "        \"yauzl\": \"^2.4.2\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"file-type\": {\n" +
        "          \"version\": \"3.9.0\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz\",\n" +
        "          \"integrity\": \"sha512-RLoqTXE8/vPmMuTI88DAzhMYC99I8BWv7zYP4A1puo5HIjEJ5EX48ighy4ZyKMG9EDXxBgW6e++cn7d1xuFghA==\"\n" +
        "        },\n" +
        "        \"get-stream\": {\n" +
        "          \"version\": \"2.3.1\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/get-stream/-/get-stream-2.3.1.tgz\",\n" +
        "          \"integrity\": \"sha512-AUGhbbemXxrZJRD5cDvKtQxLuYaIbNtDTK8YqupCI393Q2KSTreEsLUN3ZxAWFGiKTzL6nKuzfcIvieflUX9qA==\",\n" +
        "          \"requires\": {\n" +
        "            \"object-assign\": \"^4.0.1\",\n" +
        "            \"pinkie-promise\": \"^2.0.0\"\n" +
        "          }\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"devtools-protocol\": {\n" +
        "      \"version\": \"0.0.1135028\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1135028.tgz\",\n" +
        "      \"integrity\": \"sha512-jEcNGrh6lOXNRJvZb9RjeevtZGrgugPKSMJZxfyxWQnhlKawMPhMtk/dfC+Z/6xNXExlzTKlY5LzIAK/fRpQIw==\"\n" +
        "    },\n" +
        "    \"emoji-regex\": {\n" +
        "      \"version\": \"8.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==\"\n" +
        "    },\n" +
        "    \"end-of-stream\": {\n" +
        "      \"version\": \"1.4.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz\",\n" +
        "      \"integrity\": \"sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==\",\n" +
        "      \"requires\": {\n" +
        "        \"once\": \"^1.4.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"error-ex\": {\n" +
        "      \"version\": \"1.3.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz\",\n" +
        "      \"integrity\": \"sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==\",\n" +
        "      \"requires\": {\n" +
        "        \"is-arrayish\": \"^0.2.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"escalade\": {\n" +
        "      \"version\": \"3.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==\"\n" +
        "    },\n" +
        "    \"escape-string-regexp\": {\n" +
        "      \"version\": \"1.0.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz\",\n" +
        "      \"integrity\": \"sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==\"\n" +
        "    },\n" +
        "    \"extract-zip\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/extract-zip/-/extract-zip-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-GDhU9ntwuKyGXdZBUgTIe+vXnWj0fppUEtMDL0+idd5Sta8TGpHssn/eusA9mrPr9qNDym6SxAYZjNvCn/9RBg==\",\n" +
        "      \"requires\": {\n" +
        "        \"@types/yauzl\": \"^2.9.1\",\n" +
        "        \"debug\": \"^4.1.1\",\n" +
        "        \"get-stream\": \"^5.1.0\",\n" +
        "        \"yauzl\": \"^2.10.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"fast-fifo\": {\n" +
        "      \"version\": \"1.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-IgfweLvEpwyA4WgiQe9Nx6VV2QkML2NkvZnk1oKnIzXgXdWxuhF7zw4DvLTPZJn6PIUneiAXPF24QmoEqHTjyw==\"\n" +
        "    },\n" +
        "    \"fd-slicer\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==\",\n" +
        "      \"requires\": {\n" +
        "        \"pend\": \"~1.2.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"file-type\": {\n" +
        "      \"version\": \"5.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/file-type/-/file-type-5.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-Iq1nJ6D2+yIO4c8HHg4fyVb8mAJieo1Oloy1mLLaB2PvezNedhBVm+QU7g0qM42aiMbRXTxKKwGD17rjKNJYVQ==\"\n" +
        "    },\n" +
        "    \"fs-constants\": {\n" +
        "      \"version\": \"1.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==\"\n" +
        "    },\n" +
        "    \"get-caller-file\": {\n" +
        "      \"version\": \"2.0.5\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz\",\n" +
        "      \"integrity\": \"sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==\"\n" +
        "    },\n" +
        "    \"get-stream\": {\n" +
        "      \"version\": \"5.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==\",\n" +
        "      \"requires\": {\n" +
        "        \"pump\": \"^3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"graceful-fs\": {\n" +
        "      \"version\": \"4.2.11\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz\",\n" +
        "      \"integrity\": \"sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==\"\n" +
        "    },\n" +
        "    \"has-flag\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==\"\n" +
        "    },\n" +
        "    \"http-proxy-agent\": {\n" +
        "      \"version\": \"7.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-+ZT+iBxVUQ1asugqnD6oWoRiS25AkjNfG085dKJGtGxkdwLQrMKU5wJr2bOOFAXzKcTuqq+7fZlTMgG3SRfIYQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"agent-base\": \"^7.1.0\",\n" +
        "        \"debug\": \"^4.3.4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"https-proxy-agent\": {\n" +
        "      \"version\": \"7.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-Eun8zV0kcYS1g19r78osiQLEFIRspRUDd9tIfBCTBPBeMieF/EsJNL8VI3xOIdYRDEkjQnqOYPsZ2DsWsVsFwQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"agent-base\": \"^7.0.2\",\n" +
        "        \"debug\": \"4\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"ieee754\": {\n" +
        "      \"version\": \"1.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==\"\n" +
        "    },\n" +
        "    \"import-fresh\": {\n" +
        "      \"version\": \"3.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==\",\n" +
        "      \"requires\": {\n" +
        "        \"parent-module\": \"^1.0.0\",\n" +
        "        \"resolve-from\": \"^4.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"inherits\": {\n" +
        "      \"version\": \"2.0.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz\",\n" +
        "      \"integrity\": \"sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==\"\n" +
        "    },\n" +
        "    \"ip\": {\n" +
        "      \"version\": \"2.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ip/-/ip-2.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-WKa+XuLG1A1R0UWhl2+1XQSi+fZWMsYKffMZTTYsiZaUD8k2yDAj5atimTUD2TZkyCkNEeYE5NhFZmupOGtjYQ==\"\n" +
        "    },\n" +
        "    \"is-arrayish\": {\n" +
        "      \"version\": \"0.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==\"\n" +
        "    },\n" +
        "    \"is-fullwidth-code-point\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==\"\n" +
        "    },\n" +
        "    \"is-natural-number\": {\n" +
        "      \"version\": \"4.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-natural-number/-/is-natural-number-4.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-Y4LTamMe0DDQIIAlaer9eKebAlDSV6huy+TWhJVPlzZh2o4tRP5SQWFlLn5N0To4mDD22/qdOq+veo1cSISLgQ==\"\n" +
        "    },\n" +
        "    \"is-stream\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-uQPm8kcs47jx38atAcWTVxyltQYoPT68y9aWYdV6yWXSyW8mzSat0TL6CiWdZeCdF3KrAvpVtnHbTv4RN+rqdQ==\"\n" +
        "    },\n" +
        "    \"isarray\": {\n" +
        "      \"version\": \"1.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==\"\n" +
        "    },\n" +
        "    \"js-tokens\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==\"\n" +
        "    },\n" +
        "    \"js-yaml\": {\n" +
        "      \"version\": \"4.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==\",\n" +
        "      \"requires\": {\n" +
        "        \"argparse\": \"^2.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"json-parse-even-better-errors\": {\n" +
        "      \"version\": \"2.3.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz\",\n" +
        "      \"integrity\": \"sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==\"\n" +
        "    },\n" +
        "    \"lines-and-columns\": {\n" +
        "      \"version\": \"1.2.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz\",\n" +
        "      \"integrity\": \"sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==\"\n" +
        "    },\n" +
        "    \"make-dir\": {\n" +
        "      \"version\": \"1.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"pify\": \"^3.0.0\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"pify\": {\n" +
        "          \"version\": \"3.0.0\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/pify/-/pify-3.0.0.tgz\",\n" +
        "          \"integrity\": \"sha512-C3FsVNH1udSEX48gGX1xfvwTWfsYWj5U+8/uK15BGzIGrKoUpghX8hWZwa/OFnakBiiVNmBvemTJR5mcy7iPcg==\"\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"mitt\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/mitt/-/mitt-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-7dX2/10ITVyqh4aOSVI9gdape+t9l2/8QxHrFmUXu4EEUpdlxl6RudZUPZoc+zuY2hk1j7XxVroIVIan/pD/SQ==\"\n" +
        "    },\n" +
        "    \"mkdirp-classic\": {\n" +
        "      \"version\": \"0.5.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz\",\n" +
        "      \"integrity\": \"sha512-gKLcREMhtuZRwRAfqP3RFW+TK4JqApVBtOIftVgjuABpAtpxhPGaDcfvbhNvD0B8iD1oUr/txX35NjcaY6Ns/A==\"\n" +
        "    },\n" +
        "    \"ms\": {\n" +
        "      \"version\": \"2.1.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ms/-/ms-2.1.2.tgz\",\n" +
        "      \"integrity\": \"sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==\"\n" +
        "    },\n" +
        "    \"node-fetch\": {\n" +
        "      \"version\": \"2.6.12\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.12.tgz\",\n" +
        "      \"integrity\": \"sha512-C/fGU2E8ToujUivIO0H+tpQ6HWo4eEmchoPIoXtxCrVghxdKq+QOHqEZW7tuP3KlV3bC8FRMO5nMCC7Zm1VP6g==\",\n" +
        "      \"requires\": {\n" +
        "        \"whatwg-url\": \"^5.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"object-assign\": {\n" +
        "      \"version\": \"4.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==\"\n" +
        "    },\n" +
        "    \"once\": {\n" +
        "      \"version\": \"1.4.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/once/-/once-1.4.0.tgz\",\n" +
        "      \"integrity\": \"sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==\",\n" +
        "      \"requires\": {\n" +
        "        \"wrappy\": \"1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"parent-module\": {\n" +
        "      \"version\": \"1.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==\",\n" +
        "      \"requires\": {\n" +
        "        \"callsites\": \"^3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"parse-json\": {\n" +
        "      \"version\": \"5.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==\",\n" +
        "      \"requires\": {\n" +
        "        \"@babel/code-frame\": \"^7.0.0\",\n" +
        "        \"error-ex\": \"^1.3.1\",\n" +
        "        \"json-parse-even-better-errors\": \"^2.3.0\",\n" +
        "        \"lines-and-columns\": \"^1.1.6\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"path-type\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==\"\n" +
        "    },\n" +
        "    \"pend\": {\n" +
        "      \"version\": \"1.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pend/-/pend-1.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==\"\n" +
        "    },\n" +
        "    \"pify\": {\n" +
        "      \"version\": \"2.3.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pify/-/pify-2.3.0.tgz\",\n" +
        "      \"integrity\": \"sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==\"\n" +
        "    },\n" +
        "    \"pinkie\": {\n" +
        "      \"version\": \"2.0.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz\",\n" +
        "      \"integrity\": \"sha512-MnUuEycAemtSaeFSjXKW/aroV7akBbY+Sv+RkyqFjgAe73F+MR0TBWKBRDkmfWq/HiFmdavfZ1G7h4SPZXaCSg==\"\n" +
        "    },\n" +
        "    \"pinkie-promise\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-0Gni6D4UcLTbv9c57DfxDGdr41XfgUjqWZu492f0cIGr16zDU06BWP/RAEvOuo7CQ0CNjHaLlM59YJJFm3NWlw==\",\n" +
        "      \"requires\": {\n" +
        "        \"pinkie\": \"^2.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"process-nextick-args\": {\n" +
        "      \"version\": \"2.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==\"\n" +
        "    },\n" +
        "    \"progress\": {\n" +
        "      \"version\": \"2.0.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/progress/-/progress-2.0.3.tgz\",\n" +
        "      \"integrity\": \"sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==\"\n" +
        "    },\n" +
        "    \"proxy-from-env\": {\n" +
        "      \"version\": \"1.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==\"\n" +
        "    },\n" +
        "    \"pump\": {\n" +
        "      \"version\": \"3.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/pump/-/pump-3.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==\",\n" +
        "      \"requires\": {\n" +
        "        \"end-of-stream\": \"^1.1.0\",\n" +
        "        \"once\": \"^1.3.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"puppeteer\": {\n" +
        "      \"version\": \"20.8.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/puppeteer/-/puppeteer-20.8.2.tgz\",\n" +
        "      \"integrity\": \"sha512-+VRywTRGF09UyiesFL7pcU19Cq7vf2HsE/eulwSpl7YHcr8g8X+Va4qLmp7mOECwteGvP7rU8vQ7PP43fcubbA==\",\n" +
        "      \"requires\": {\n" +
        "        \"@puppeteer/browsers\": \"1.4.5\",\n" +
        "        \"cosmiconfig\": \"8.2.0\",\n" +
        "        \"puppeteer-core\": \"20.8.2\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"puppeteer-core\": {\n" +
        "      \"version\": \"20.8.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-20.8.2.tgz\",\n" +
        "      \"integrity\": \"sha512-dWo60gFuFPdNhdabW9MMm6GpvkG6tND2D8FvrZ2MF+HggNApHrvLfbERj8vD6vXKV7UqDAJO0KI1OMo3S3Cm5w==\",\n" +
        "      \"requires\": {\n" +
        "        \"@puppeteer/browsers\": \"1.4.5\",\n" +
        "        \"chromium-bidi\": \"0.4.16\",\n" +
        "        \"cross-fetch\": \"4.0.0\",\n" +
        "        \"debug\": \"4.3.4\",\n" +
        "        \"devtools-protocol\": \"0.0.1135028\",\n" +
        "        \"ws\": \"8.13.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"queue-tick\": {\n" +
        "      \"version\": \"1.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/queue-tick/-/queue-tick-1.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-kJt5qhMxoszgU/62PLP1CJytzd2NKetjSRnyuj31fDd3Rlcz3fzlFdFLD1SItunPwyqEOkca6GbV612BWfaBag==\"\n" +
        "    },\n" +
        "    \"readable-stream\": {\n" +
        "      \"version\": \"2.3.8\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz\",\n" +
        "      \"integrity\": \"sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==\",\n" +
        "      \"requires\": {\n" +
        "        \"core-util-is\": \"~1.0.0\",\n" +
        "        \"inherits\": \"~2.0.3\",\n" +
        "        \"isarray\": \"~1.0.0\",\n" +
        "        \"process-nextick-args\": \"~2.0.0\",\n" +
        "        \"safe-buffer\": \"~5.1.1\",\n" +
        "        \"string_decoder\": \"~1.1.1\",\n" +
        "        \"util-deprecate\": \"~1.0.1\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"safe-buffer\": {\n" +
        "          \"version\": \"5.1.2\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz\",\n" +
        "          \"integrity\": \"sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==\"\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"require-directory\": {\n" +
        "      \"version\": \"2.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==\"\n" +
        "    },\n" +
        "    \"resolve-from\": {\n" +
        "      \"version\": \"4.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==\"\n" +
        "    },\n" +
        "    \"safe-buffer\": {\n" +
        "      \"version\": \"5.2.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz\",\n" +
        "      \"integrity\": \"sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==\"\n" +
        "    },\n" +
        "    \"seek-bzip\": {\n" +
        "      \"version\": \"1.0.6\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/seek-bzip/-/seek-bzip-1.0.6.tgz\",\n" +
        "      \"integrity\": \"sha512-e1QtP3YL5tWww8uKaOCQ18UxIT2laNBXHjV/S2WYCiK4udiv8lkG89KRIoCjUagnAmCBurjF4zEVX2ByBbnCjQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"commander\": \"^2.8.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"smart-buffer\": {\n" +
        "      \"version\": \"4.2.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz\",\n" +
        "      \"integrity\": \"sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==\"\n" +
        "    },\n" +
        "    \"socks\": {\n" +
        "      \"version\": \"2.7.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/socks/-/socks-2.7.1.tgz\",\n" +
        "      \"integrity\": \"sha512-7maUZy1N7uo6+WVEX6psASxtNlKaNVMlGQKkG/63nEDdLOWNbiUMoLK7X4uYoLhQstau72mLgfEWcXcwsaHbYQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"ip\": \"^2.0.0\",\n" +
        "        \"smart-buffer\": \"^4.2.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"socks-proxy-agent\": {\n" +
        "      \"version\": \"8.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-59EjPbbgg8U3x62hhKOFVAmySQUcfRQ4C7Q/D5sEHnZTQRrQlNKINks44DMR1gwXp0p4LaVIeccX2KHTTcHVqQ==\",\n" +
        "      \"requires\": {\n" +
        "        \"agent-base\": \"^7.0.1\",\n" +
        "        \"debug\": \"^4.3.4\",\n" +
        "        \"socks\": \"^2.7.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"streamx\": {\n" +
        "      \"version\": \"2.15.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/streamx/-/streamx-2.15.0.tgz\",\n" +
        "      \"integrity\": \"sha512-HcxY6ncGjjklGs1xsP1aR71INYcsXFJet5CU1CHqihQ2J5nOsbd4OjgjHO42w/4QNv9gZb3BueV+Vxok5pLEXg==\",\n" +
        "      \"requires\": {\n" +
        "        \"fast-fifo\": \"^1.1.0\",\n" +
        "        \"queue-tick\": \"^1.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"string_decoder\": {\n" +
        "      \"version\": \"1.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==\",\n" +
        "      \"requires\": {\n" +
        "        \"safe-buffer\": \"~5.1.0\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"safe-buffer\": {\n" +
        "          \"version\": \"5.1.2\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz\",\n" +
        "          \"integrity\": \"sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==\"\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"string-width\": {\n" +
        "      \"version\": \"4.2.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz\",\n" +
        "      \"integrity\": \"sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==\",\n" +
        "      \"requires\": {\n" +
        "        \"emoji-regex\": \"^8.0.0\",\n" +
        "        \"is-fullwidth-code-point\": \"^3.0.0\",\n" +
        "        \"strip-ansi\": \"^6.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"strip-ansi\": {\n" +
        "      \"version\": \"6.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==\",\n" +
        "      \"requires\": {\n" +
        "        \"ansi-regex\": \"^5.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"strip-dirs\": {\n" +
        "      \"version\": \"2.1.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/strip-dirs/-/strip-dirs-2.1.0.tgz\",\n" +
        "      \"integrity\": \"sha512-JOCxOeKLm2CAS73y/U4ZeZPTkE+gNVCzKt7Eox84Iej1LT/2pTWYpZKJuxwQpvX1LiZb1xokNR7RLfuBAa7T3g==\",\n" +
        "      \"requires\": {\n" +
        "        \"is-natural-number\": \"^4.0.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"supports-color\": {\n" +
        "      \"version\": \"5.5.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz\",\n" +
        "      \"integrity\": \"sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==\",\n" +
        "      \"requires\": {\n" +
        "        \"has-flag\": \"^3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"tar-fs\": {\n" +
        "      \"version\": \"3.0.4\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tar-fs/-/tar-fs-3.0.4.tgz\",\n" +
        "      \"integrity\": \"sha512-5AFQU8b9qLfZCX9zp2duONhPmZv0hGYiBPJsyUdqMjzq/mqVpy/rEUSeHk1+YitmxugaptgBh5oDGU3VsAJq4w==\",\n" +
        "      \"requires\": {\n" +
        "        \"mkdirp-classic\": \"^0.5.2\",\n" +
        "        \"pump\": \"^3.0.0\",\n" +
        "        \"tar-stream\": \"^3.1.5\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"tar-stream\": {\n" +
        "      \"version\": \"3.1.6\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tar-stream/-/tar-stream-3.1.6.tgz\",\n" +
        "      \"integrity\": \"sha512-B/UyjYwPpMBv+PaFSWAmtYjwdrlEaZQEhMIBFNC5oEG8lpiW8XjcSdmEaClj28ArfKScKHs2nshz3k2le6crsg==\",\n" +
        "      \"requires\": {\n" +
        "        \"b4a\": \"^1.6.4\",\n" +
        "        \"fast-fifo\": \"^1.2.0\",\n" +
        "        \"streamx\": \"^2.15.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"through\": {\n" +
        "      \"version\": \"2.3.8\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/through/-/through-2.3.8.tgz\",\n" +
        "      \"integrity\": \"sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==\"\n" +
        "    },\n" +
        "    \"to-buffer\": {\n" +
        "      \"version\": \"1.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/to-buffer/-/to-buffer-1.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-lx9B5iv7msuFYE3dytT+KE5tap+rNYw+K4jVkb9R/asAb+pbBSM17jtunHplhBe6RRJdZx3Pn2Jph24O32mOVg==\"\n" +
        "    },\n" +
        "    \"tr46\": {\n" +
        "      \"version\": \"0.0.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz\",\n" +
        "      \"integrity\": \"sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==\"\n" +
        "    },\n" +
        "    \"unbzip2-stream\": {\n" +
        "      \"version\": \"1.4.3\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/unbzip2-stream/-/unbzip2-stream-1.4.3.tgz\",\n" +
        "      \"integrity\": \"sha512-mlExGW4w71ebDJviH16lQLtZS32VKqsSfk80GCfUlwT/4/hNRFsoscrF/c++9xinkMzECL1uL9DDwXqFWkruPg==\",\n" +
        "      \"requires\": {\n" +
        "        \"buffer\": \"^5.2.1\",\n" +
        "        \"through\": \"^2.3.8\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"util-deprecate\": {\n" +
        "      \"version\": \"1.0.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz\",\n" +
        "      \"integrity\": \"sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==\"\n" +
        "    },\n" +
        "    \"webidl-conversions\": {\n" +
        "      \"version\": \"3.0.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz\",\n" +
        "      \"integrity\": \"sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==\"\n" +
        "    },\n" +
        "    \"whatwg-url\": {\n" +
        "      \"version\": \"5.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==\",\n" +
        "      \"requires\": {\n" +
        "        \"tr46\": \"~0.0.3\",\n" +
        "        \"webidl-conversions\": \"^3.0.0\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"wrap-ansi\": {\n" +
        "      \"version\": \"7.0.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz\",\n" +
        "      \"integrity\": \"sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==\",\n" +
        "      \"requires\": {\n" +
        "        \"ansi-styles\": \"^4.0.0\",\n" +
        "        \"string-width\": \"^4.1.0\",\n" +
        "        \"strip-ansi\": \"^6.0.0\"\n" +
        "      },\n" +
        "      \"dependencies\": {\n" +
        "        \"ansi-styles\": {\n" +
        "          \"version\": \"4.3.0\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz\",\n" +
        "          \"integrity\": \"sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==\",\n" +
        "          \"requires\": {\n" +
        "            \"color-convert\": \"^2.0.1\"\n" +
        "          }\n" +
        "        },\n" +
        "        \"color-convert\": {\n" +
        "          \"version\": \"2.0.1\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz\",\n" +
        "          \"integrity\": \"sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==\",\n" +
        "          \"requires\": {\n" +
        "            \"color-name\": \"~1.1.4\"\n" +
        "          }\n" +
        "        },\n" +
        "        \"color-name\": {\n" +
        "          \"version\": \"1.1.4\",\n" +
        "          \"resolved\": \"https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz\",\n" +
        "          \"integrity\": \"sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==\"\n" +
        "        }\n" +
        "      }\n" +
        "    },\n" +
        "    \"wrappy\": {\n" +
        "      \"version\": \"1.0.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz\",\n" +
        "      \"integrity\": \"sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==\"\n" +
        "    },\n" +
        "    \"ws\": {\n" +
        "      \"version\": \"8.13.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/ws/-/ws-8.13.0.tgz\",\n" +
        "      \"integrity\": \"sha512-x9vcZYTrFPC7aSIbj7sRCYo7L/Xb8Iy+pW0ng0wt2vCJv7M9HOMy0UoN3rr+IFC7hb7vXoqS+P9ktyLLLhO+LA==\",\n" +
        "      \"requires\": {}\n" +
        "    },\n" +
        "    \"xtend\": {\n" +
        "      \"version\": \"4.0.2\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz\",\n" +
        "      \"integrity\": \"sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==\"\n" +
        "    },\n" +
        "    \"y18n\": {\n" +
        "      \"version\": \"5.0.8\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz\",\n" +
        "      \"integrity\": \"sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==\"\n" +
        "    },\n" +
        "    \"yargs\": {\n" +
        "      \"version\": \"17.7.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/yargs/-/yargs-17.7.1.tgz\",\n" +
        "      \"integrity\": \"sha512-cwiTb08Xuv5fqF4AovYacTFNxk62th7LKJ6BL9IGUpTJrWoU7/7WdQGTP2SjKf1dUNBGzDd28p/Yfs/GI6JrLw==\",\n" +
        "      \"requires\": {\n" +
        "        \"cliui\": \"^8.0.1\",\n" +
        "        \"escalade\": \"^3.1.1\",\n" +
        "        \"get-caller-file\": \"^2.0.5\",\n" +
        "        \"require-directory\": \"^2.1.1\",\n" +
        "        \"string-width\": \"^4.2.3\",\n" +
        "        \"y18n\": \"^5.0.5\",\n" +
        "        \"yargs-parser\": \"^21.1.1\"\n" +
        "      }\n" +
        "    },\n" +
        "    \"yargs-parser\": {\n" +
        "      \"version\": \"21.1.1\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz\",\n" +
        "      \"integrity\": \"sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==\"\n" +
        "    },\n" +
        "    \"yauzl\": {\n" +
        "      \"version\": \"2.10.0\",\n" +
        "      \"resolved\": \"https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz\",\n" +
        "      \"integrity\": \"sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==\",\n" +
        "      \"requires\": {\n" +
        "        \"buffer-crc32\": \"~0.2.3\",\n" +
        "        \"fd-slicer\": \"~1.1.0\"\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "}\n"],
        ["README.md", "После распаковки архива запустить /import/modules.php\n" +
        "Далее можно обновлять сайт по пути /import/ в браузере\n" +
        "Бэкап предыдущей версии сайта будет лежать в папке /import/old-site.zip"],
        ["assets/css/style.css", "body {\n" +
        "    width: 100%;\n" +
        "    height: 100vh;\n" +
        "    display: flex;\n" +
        "    align-items: center;\n" +
        "    justify-content: center;\n" +
        "    text-align: center;\n" +
        "}\n" +
        ".lds-roller {\n" +
        "    display: inline-block;\n" +
        "    position: relative;\n" +
        "    width: 80px;\n" +
        "    height: 80px;\n" +
        "}\n" +
        ".lds-roller div {\n" +
        "    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n" +
        "    transform-origin: 40px 40px;\n" +
        "}\n" +
        ".lds-roller div:after {\n" +
        "    content: \" \";\n" +
        "    display: block;\n" +
        "    position: absolute;\n" +
        "    width: 7px;\n" +
        "    height: 7px;\n" +
        "    border-radius: 50%;\n" +
        "    background: #000;\n" +
        "    margin: -4px 0 0 -4px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(1) {\n" +
        "    animation-delay: -0.036s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(1):after {\n" +
        "    top: 63px;\n" +
        "    left: 63px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(2) {\n" +
        "    animation-delay: -0.072s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(2):after {\n" +
        "    top: 68px;\n" +
        "    left: 56px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(3) {\n" +
        "    animation-delay: -0.108s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(3):after {\n" +
        "    top: 71px;\n" +
        "    left: 48px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(4) {\n" +
        "    animation-delay: -0.144s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(4):after {\n" +
        "    top: 72px;\n" +
        "    left: 40px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(5) {\n" +
        "    animation-delay: -0.18s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(5):after {\n" +
        "    top: 71px;\n" +
        "    left: 32px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(6) {\n" +
        "    animation-delay: -0.216s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(6):after {\n" +
        "    top: 68px;\n" +
        "    left: 24px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(7) {\n" +
        "    animation-delay: -0.252s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(7):after {\n" +
        "    top: 63px;\n" +
        "    left: 17px;\n" +
        "}\n" +
        ".lds-roller div:nth-child(8) {\n" +
        "    animation-delay: -0.288s;\n" +
        "}\n" +
        ".lds-roller div:nth-child(8):after {\n" +
        "    top: 56px;\n" +
        "    left: 12px;\n" +
        "}\n" +
        "@keyframes lds-roller {\n" +
        "    0% {\n" +
        "    transform: rotate(0deg);\n" +
        "    }\n" +
        "    100% {\n" +
        "    transform: rotate(360deg);\n" +
        "    }\n" +
        "}"],
        ["assets/css/style.min.css", "body{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}.lds-roller{display:inline-block;position:relative;width:80px;height:80px}.lds-roller div{animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;transform-origin:40px 40px}.lds-roller div:after{content:\" \";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#000;margin:-4px 0 0 -4px}.lds-roller div:first-child{animation-delay:-36ms}.lds-roller div:first-child:after{top:63px;left:63px}.lds-roller div:nth-child(2){animation-delay:-72ms}.lds-roller div:nth-child(2):after{top:68px;left:56px}.lds-roller div:nth-child(3){animation-delay:-108ms}.lds-roller div:nth-child(3):after{top:71px;left:48px}.lds-roller div:nth-child(4){animation-delay:-144ms}.lds-roller div:nth-child(4):after{top:72px;left:40px}.lds-roller div:nth-child(5){animation-delay:-.18s}.lds-roller div:nth-child(5):after{top:71px;left:32px}.lds-roller div:nth-child(6){animation-delay:-216ms}.lds-roller div:nth-child(6):after{top:68px;left:24px}.lds-roller div:nth-child(7){animation-delay:-252ms}.lds-roller div:nth-child(7):after{top:63px;left:17px}.lds-roller div:nth-child(8){animation-delay:-288ms}.lds-roller div:nth-child(8):after{top:56px;left:12px}@keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"],
        ["assets/js/ajax.js", "$.ajax({\n" +
        "    url: \"/import/import.php\",\n" +
        "    method: 'GET'\n" +
        "})\n" +
        "    .done(function(data) {\n" +
        "        let result = null;\n" +
        "        try {\n" +
        "            result = JSON.parse(data);\n" +
        "        } catch (e) {\n" +
        "            result = {\n" +
        "                error: data,\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "        if (result?.success) {\n" +
        "            $('.content').html(`<p style=\"color:green\">${result.success}</p>`);\n" +
        "        } else {\n" +
        "            $('.content').html(`<p style=\"color:red\">${result?.error || 'Произошла ошибка'}</p>`);\n" +
        "        }\n" +
        "    });"],
        ["assets/js/ajax.min.js", "$.ajax({url:\"/import/import.php\",method:\"GET\"}).done(function(e){let r=null;try{r=JSON.parse(e)}catch(t){r={error:e}}r?.success?$(\".content\").html(`<p style=\"color:green\">${r.success}</p>`):$(\".content\").html(`<p style=\"color:red\">${r?.error||\"Произошла ошибка\"}</p>`)});"],
        ["assets/js/jquery.min.js", `/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.0",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=ce.text(t);return n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\\x20\\\\t\\\\r\\\\n\\\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\\0-\x1f\x7f]|^-?\\d)|^-$|[^\x80-\uFFFF\\w-]/g;function p(e,t){return t?"\\0"===e?"\ufffd":e.slice(0,-1)+"\\\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\\\\\[\\\\da-fA-F]{1,6}"+ge+"?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\x7f])+",p="\\\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+t+"))|)"+ge+"*\\\\]",g=":("+t+")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|"+p+")*)|.*)\\\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+ge+"*(even|odd|(([+-]|)(\\\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\\\d+)|))"+ge+"*\\\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+ge+"*((?:-\\\\d)?\\\\d*)"+ge+"*\\\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\\d$/i,L=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\\\\\[\\\\da-fA-F]{1,6}"+ge+"?|\\\\\\\\([^\\\\r\\\\n\\\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},R=function(){V()},M=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&z(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function X(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&M(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function U(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function z(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",R),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\\r\\\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\\"\\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:X(!1),disabled:X(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:U(function(){return[0]}),last:U(function(e,t){return[t-1]}),eq:U(function(e,t,n){return[n<0?n+t:n]}),even:U(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:U(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:U(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:U(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&z(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&z(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\\/\\0>:\x20\\t\\r\\n\\f]*)[\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\\t\\r\\n\\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var R=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)R(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},M=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(M,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,X=new B,U=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,z=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:U.test(i)?JSON.parse(i):i)}catch(e){}X.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return X.hasData(e)||_.hasData(e)},data:function(e,t,n){return X.access(e,t,n)},removeData:function(e,t){X.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=X.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){X.set(this,n)}):R(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=X.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){X.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){X.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\\/\\0>\x20\\t\\r\\n\\f]*)/i,Ce=/^$|^module$|\\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\\\.)"+h.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\\s*(?:[^=]|=\\s*.checked.)/i,Re=/^\\s*<!\\[CDATA\\[|\\]\\]>\\s*$/g;function Me(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);X.hasData(e)&&(o=X.access(e),a=ce.extend({},o),X.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Re,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[X.expando]&&(n[X.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return R(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Me(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return R(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),Xe=/^--/,Ue=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},ze=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=Xe.test(t),u=e.style;return(n=n||Ue(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Ue(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=Xe.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return Xe.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):ze(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Ue(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return R(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ue(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return R(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return R(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\\\.)"+h.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\\[\\]$/,Lt=/\\r?\\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\\r\\n")}}):{name:t.name,value:n.replace(Lt,"\\r\\n")}}).get()}});var Rt=/%20/g,Mt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\\/\\//,Bt={},_t={},Xt="*/".concat("*"),Ut=C.createElement("a");function zt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Ut.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:zt(Bt),ajaxTransport:zt(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ut.protocol+"//"+Ut.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Mt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Rt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Xt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\\?(?=&|$)|\\?\\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return R(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return R(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\\s\uFEFF\xA0]+|([^\\s\uFEFF\xA0])[\\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});`],
        ["assets/js/script.js", "const puppeteer = require('puppeteer');\n" +
        "const fs = require('fs');\n" +
        "const decompress = require('decompress');\n" +
        "const AdmZip = require(\"adm-zip\");\n" +
        "\n" +
        "class SiteUpdate {\n" +
        "    constructor() {\n" +
        "        this.browser = null;\n" +
        "        this.page = null;\n" +
        "        this.client = null;\n" +
        "        this.submitButtonSelector = 'button[type=submit]';\n" +
        "        this.configBlockSelector = 'textarea[name=config_json]';\n" +
        "        this.configPath = '../config.json';\n" +
        "        this.configBlock = null;\n" +
        "        this.config = null;\n" +
        "        this.site = 'https://ein.gg/oowg/';\n" +
        "        this.domainName = '';\n" +
        "        this.archiveFolder = 'tmp';\n" +
        "\n" +
        "        this.init();\n" +
        "    }\n" +
        "    async init() {\n" +
        "        try {\n" +
        "            this.addBackup();\n" +
        "            await this.setBrowser();\n" +
        "            await this.setPage();\n" +
        "            await this.setClient();\n" +
        "            await this.setDownloadAllow();\n" +
        "            await this.loadPage();\n" +
        "\n" +
        "            const download = this.setDownloadListener();\n" +
        "\n" +
        "            await this.findConfigBlock();\n" +
        "\n" +
        "            if (!this.configBlock) {\n" +
        "                await this.setExperementalMode();\n" +
        "                await this.findConfigBlock();\n" +
        "            }\n" +
        "\n" +
        "            if (this.configBlock) {\n" +
        "                this.getConfigFromFile();\n" +
        "                this.getDomainName();\n" +
        "                await this.fillConfigBlock();\n" +
        "                await new Promise((resolve) => {\n" +
        "                    setTimeout(() => {\n" +
        "                        resolve(this.downloadArchive());\n" +
        "                    }, 30000);\n" +
        "                });\n" +
        "                await download;\n" +
        "            } else {\n" +
        "                throw 'Конфиг-блок не найден';\n" +
        "            }\n" +
        "        } catch (e) {\n" +
        "            this.closeBrowser();\n" +
        "            this.removeBackup();\n" +
        "            console.log(JSON.stringify({\n" +
        "                error: [e.message]\n" +
        "            }));\n" +
        "        }\n" +
        "    }\n" +
        "    async setBrowser() {\n" +
        "        try {\n" +
        "            this.browser = await puppeteer.launch({\n" +
        "                product: 'chrome',\n" +
        "                args: ['--no-sandbox']\n" +
        "            });\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при открытии браузера: ${e}`);\n" +
        "        }\n" +
        "\n" +
        "    }\n" +
        "    async setPage() {\n" +
        "        try {\n" +
        "            this.page = await this.browser.newPage();\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при переходе на сайт: ${e}`);\n" +
        "        }\n" +
        "\n" +
        "    }\n" +
        "    async setClient() {\n" +
        "        try {\n" +
        "            this.client = await this.page.target().createCDPSession();\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при открытии браузера: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async setDownloadAllow() {\n" +
        "        try {\n" +
        "            await this.client.send('Browser.setDownloadBehavior', {\n" +
        "                behavior: 'allow',\n" +
        "                downloadPath: this.archiveFolder,\n" +
        "                eventsEnabled: true\n" +
        "            });\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при установке разрешение на скачивание: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async loadPage() {\n" +
        "        try {\n" +
        "            await this.page.goto(this.site, { waitUntil: 'load' });\n" +
        "            await this.page.waitForSelector(this.submitButtonSelector);\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при загрузке страницы: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async findConfigBlock() {\n" +
        "        try {\n" +
        "            this.configBlock = await this.page.$(this.configBlockSelector);\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Конфиг-блок не найден: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async setExperementalMode() {\n" +
        "        try {\n" +
        "            const [experimentalModeBtn] = await this.page.$x(\"//p[contains(text(), 'Experimental Mode')]\");\n" +
        "            if (experimentalModeBtn) {\n" +
        "                await experimentalModeBtn.click();\n" +
        "            } else {\n" +
        "                throw 'Блок не найден';\n" +
        "            }\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при поиске Experimental Mode: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    getConfigFromFile() {\n" +
        "        try {\n" +
        "            this.config = fs.readFileSync(this.configPath, 'utf8');\n" +
        "            if (!this.config) {\n" +
        "                throw 'Файл пуст';\n" +
        "            }\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при открытии файла config.json: ${e}`);\n" +
        "        }\n" +
        "\n" +
        "    }\n" +
        "    getDomainName() {\n" +
        "        try {\n" +
        "            const decode = JSON.parse(this.config);\n" +
        "            this.domainName = decode.domainName;\n" +
        "            if (!this.domainName) {\n" +
        "                throw 'Доменное имя не найдено в файле';\n" +
        "            }\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при получнии доменного имени: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async fillConfigBlock() {\n" +
        "        try {\n" +
        "            await this.page.$eval(\n" +
        "                this.configBlockSelector,\n" +
        "                (el, conf) => el.value = conf,\n" +
        "                this.config\n" +
        "            );\n" +
        "            await this.page.type(this.configBlockSelector, ' ');\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при вставке конфига: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async downloadArchive() {\n" +
        "        try {\n" +
        "            await this.page.click(this.submitButtonSelector);\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при скачивании архива: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "    async setDownloadListener () {\n" +
        "        return new Promise((resolve, reject) => {\n" +
        "            this.client.on('Browser.downloadProgress', async (event) => {\n" +
        "                try {\n" +
        "                    if (event.state == 'completed' ) {\n" +
        "                        await this.closeBrowser();\n" +
        "                        await this.extractArchive();\n" +
        "                        resolve(true);\n" +
        "                    } else if (event.state === 'canceled') {\n" +
        "                        throw new Error(event.state);\n" +
        "                    }\n" +
        "                } catch(e) {\n" +
        "                    reject(new Error(`Произошла ошибка при скачивании архива: ${e}`));\n" +
        "                }\n" +
        "            });\n" +
        "        })\n" +
        "    }\n" +
        "    async closeBrowser() {\n" +
        "        await this.browser.close();\n" +
        "    }\n" +
        "\n" +
        "    async addBackup() {\n" +
        "        const zip = new AdmZip();\n" +
        "        zip.addLocalFolder('../');\n" +
        "        zip.writeZip(\"old-site.zip\");\n" +
        "    }\n" +
        "\n" +
        "    async removeBackup() {\n" +
        "        fs.rmSync('old-site.zip');\n" +
        "    }\n" +
        "\n" +
        "    async extractArchive() {\n" +
        "        try {\n" +
        "            const archiveName = `${this.archiveFolder}/${this.domainName}.zip`;\n" +
        "            await decompress(archiveName, '../').then((files) => {\n" +
        "                fs.rmSync('tmp', { recursive: true });\n" +
        "                console.log(JSON.stringify({\n" +
        "                    success: \"Готово\"\n" +
        "                }));\n" +
        "            });\n" +
        "        } catch(e) {\n" +
        "            throw new Error(`Произошла ошибка при распаковке архива: ${e}`);\n" +
        "        }\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "\n" +
        "const update = new SiteUpdate();"],
        ["assets/js/script.min.js", "const puppeteer=require(\"puppeteer\"),fs=require(\"fs\"),decompress=require(\"decompress\"),AdmZip=require(\"adm-zip\");class SiteUpdate{constructor(){this.browser=null,this.page=null,this.client=null,this.submitButtonSelector=\"button[type=submit]\",this.configBlockSelector=\"textarea[name=config_json]\",this.configPath=\"../config.json\",this.configBlock=null,this.config=null,this.site=\"https://ein.gg/oowg/\",this.domainName=\"\",this.archiveFolder=\"tmp\",this.init()}async init(){try{this.addBackup(),await this.setBrowser(),await this.setPage(),await this.setClient(),await this.setDownloadAllow(),await this.loadPage();let t=this.setDownloadListener();if(await this.findConfigBlock(),this.configBlock||(await this.setExperementalMode(),await this.findConfigBlock()),this.configBlock)this.getConfigFromFile(),this.getDomainName(),await this.fillConfigBlock(),await new Promise(t=>{setTimeout(()=>{t(this.downloadArchive())},3e4)}),await t;else throw\"Конфиг-блок не найден\"}catch(e){this.closeBrowser(),this.removeBackup(),console.log(JSON.stringify({error:[e.message]}))}}async setBrowser(){try{this.browser=await puppeteer.launch({product:\"chrome\",args:[\"--no-sandbox\"]})}catch(t){throw Error(`Произошла ошибка при открытии браузера: ${t}`)}}async setPage(){try{this.page=await this.browser.newPage()}catch(t){throw Error(`Произошла ошибка при переходе на сайт: ${t}`)}}async setClient(){try{this.client=await this.page.target().createCDPSession()}catch(t){throw Error(`Произошла ошибка при открытии браузера: ${t}`)}}async setDownloadAllow(){try{await this.client.send(\"Browser.setDownloadBehavior\",{behavior:\"allow\",downloadPath:this.archiveFolder,eventsEnabled:!0})}catch(t){throw Error(`Произошла ошибка при установке разрешение на скачивание: ${t}`)}}async loadPage(){try{await this.page.goto(this.site,{waitUntil:\"load\"}),await this.page.waitForSelector(this.submitButtonSelector)}catch(t){throw Error(`Произошла ошибка при загрузке страницы: ${t}`)}}async findConfigBlock(){try{this.configBlock=await this.page.$(this.configBlockSelector)}catch(t){throw Error(`Конфиг-блок не найден: ${t}`)}}async setExperementalMode(){try{let[t]=await this.page.$x(\"//p[contains(text(), 'Experimental Mode')]\");if(t)await t.click();else throw\"Блок не найден\"}catch(e){throw Error(`Произошла ошибка при поиске Experimental Mode: ${e}`)}}getConfigFromFile(){try{if(this.config=fs.readFileSync(this.configPath,\"utf8\"),!this.config)throw\"Файл пуст\"}catch(t){throw Error(`Произошла ошибка при открытии файла config.json: ${t}`)}}getDomainName(){try{let t=JSON.parse(this.config);if(this.domainName=t.domainName,!this.domainName)throw\"Доменное имя не найдено в файле\"}catch(e){throw Error(`Произошла ошибка при получнии доменного имени: ${e}`)}}async fillConfigBlock(){try{await this.page.$eval(this.configBlockSelector,(t,e)=>t.value=e,this.config),await this.page.type(this.configBlockSelector,\" \")}catch(t){throw Error(`Произошла ошибка при вставке конфига: ${t}`)}}async downloadArchive(){try{await this.page.click(this.submitButtonSelector)}catch(t){throw Error(`Произошла ошибка при скачивании архива: ${t}`)}}async setDownloadListener(){return new Promise((t,e)=>{this.client.on(\"Browser.downloadProgress\",async i=>{try{if(\"completed\"==i.state)await this.closeBrowser(),await this.extractArchive(),t(!0);else if(\"canceled\"===i.state)throw Error(i.state)}catch(a){e(Error(`Произошла ошибка при скачивании архива: ${a}`))}})})}async closeBrowser(){await this.browser.close()}async addBackup(){let t=new AdmZip;t.addLocalFolder(\"../\"),t.writeZip(\"old-site.zip\")}async removeBackup(){fs.rmSync(\"old-site.zip\")}async extractArchive(){try{let t=`${this.archiveFolder}/${this.domainName}.zip`;await decompress(t,\"../\").then(t=>{fs.rmSync(\"tmp\",{recursive:!0}),console.log(JSON.stringify({success:\"Готово\"}))})}catch(e){throw Error(`Произошла ошибка при распаковке архива: ${e}`)}}}const update=new SiteUpdate;"],
    ];
}
