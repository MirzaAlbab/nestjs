[33mcommit 0c536cf757bd56aa884cc5125c2de4d85f29549f[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmaster[m[33m)[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Mon Aug 19 12:57:33 2024 +0700

    Revert "feat: add approve items with admin guards and make current user middleware"
    
    This reverts commit a590407ddff56e99c9a49b90b7a70b0f1c4ef44a.

[33mcommit a590407ddff56e99c9a49b90b7a70b0f1c4ef44a[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Mon Aug 19 12:09:50 2024 +0700

    feat: add approve items with admin guards and make current user middleware

[33mcommit 814c4f6391fddd3eaf32d0d2a38c658a459eefb7[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Mon Aug 19 11:05:11 2024 +0700

    feat: add item relation to user, exclude unless id after item creation, preparation for approved item

[33mcommit 274ab3e4233058aa715a4038ea3f1f2c7da4165a[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Fri Aug 16 20:21:20 2024 +0700

    Revert "feat: add one to many relation and transform response to expose only certain data"
    
    This reverts commit 9c116d8a03d94d0886b39a8a73cbf24e4f5663b8.

[33mcommit 9c116d8a03d94d0886b39a8a73cbf24e4f5663b8[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Fri Aug 16 08:47:34 2024 +0700

    feat: add one to many relation and transform response to expose only certain data

[33mcommit cfaa20a59d543a8ecc744bfcb515f13a00b89d1f[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Thu Aug 15 19:22:08 2024 +0700

    feat: add create item

[33mcommit 894267baef0f62d9eb75cc221b1ca00231481a50[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Thu Aug 15 18:51:26 2024 +0700

    feat: add config to separate db for testing and development, add e2e testing register to login

[33mcommit 8fbc9918f7a793e9a0a3c766179d68ca362d01cd[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Thu Aug 15 17:39:57 2024 +0700

    rafactor: make pipeline and middleware to be global in app module

[33mcommit 5cdec2d97426a2e9d8147651c1609114000a36f0[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Thu Aug 15 09:18:49 2024 +0700

    testing: setup and add auth testing

[33mcommit 24fc8a15ba3e8f552ca37997cebcc5b4e9f1b243[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Wed Aug 14 19:25:37 2024 +0700

    testing: add register testing

[33mcommit ab0c126cd98ef757c20610c280c2c130b7f11310[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Wed Aug 14 19:00:32 2024 +0700

    feat: add guard to prevent request before login in user controller

[33mcommit 9d97808d2bd9651185a58ffa5c73d21838b70f40[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Wed Aug 14 18:53:57 2024 +0700

    refactor: make custom interceptor global

[33mcommit c979b797d09cd4ffc6bce1b0c84ba7e46a7931ae[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Wed Aug 14 18:40:54 2024 +0700

    feat: add decorator and interceptor for current user

[33mcommit 87ee90e7f4f51d5bfff6a810b63269d703d2ae60[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Wed Aug 14 18:22:08 2024 +0700

    refactor: separate auth into module

[33mcommit c22a4589d1d773dc2efef933e3343baef7661521[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Mon Aug 12 15:47:11 2024 +0700

    feat: add login and register feature

[33mcommit 2c78435d7ec8320e568e1ae00cb501d7e578c578[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Wed Aug 7 19:27:44 2024 +0700

    feat: add interceptor to exclude property of data

[33mcommit 1049f48411c71b8d7c812edea54efd7457b797c6[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Mon Aug 5 15:56:16 2024 +0700

    feat: crud user module and exception if user not found

[33mcommit ff2d76c20f74b0d97cf70935c70402fbf97efa33[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Fri Aug 2 11:29:57 2024 +0700

    feat: create dto for validation of request

[33mcommit 0d1b587ea1a73f814e49ce3d4fb270d9636128f0[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Fri Aug 2 11:12:58 2024 +0700

    db: make entity and property

[33mcommit 39dcfdd2dcd527ea95e62933b7069985128b910f[m
Author: unknown <mirzaalbabfirdaus17@gmail.com>
Date:   Fri Aug 2 10:47:14 2024 +0700

    init: set up project and generate items, users module, controller and services
