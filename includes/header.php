<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plateforme de Vote en ligne</title>
  <link rel="stylesheet" href="/assets/css/style.css">
  <style>
    .header {
        width: 100%;
        position: relative;
        background-color: #f0f0f0;
        filter: drop-shadow(0px 0px 3px gray);
    }

    .container {
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header-top {
        padding: 1rem;
    }

    .header-bottom {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }

    .header-logo {
        width: 64px;
        height: auto;
    }

    .header-text-box {
        line-height: 0;
    }


    @media screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: flex-start;
        }

        .header-top {
            padding-left: 0;
        }

        .header-bottom {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: inset 0 1px 0 0 var(--default-gray);
            margin-top: 10px;
            width: 90%;
            padding-left: 0;
        }

    }
  </style>
</head>
<body>
  <header class="header">
    <div class="container">
        <div class="header-top">
            <img src="/assets/images/eirbware.png" alt="Eirb" class="header-logo">
        </div>
        <div class="header-bottom">
            <div class="header-text-box">
                <h4>vote.eirb.fr</dh4iv>
                <h5 style="font-weight: 500;">Le site officiel de eirbware</h5>
            </div>
        </div>
    </div>
  </header>
</body>
</html>
