<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

    <title>Time Keeper</title>
</head>

<body>
    <main>
        <!-- Side Menu -->
        <div class="side_menu d-flex flex-column flex-shrink-0 p-3" style="width: 300px;">
            <a href="index.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src="images/logo.png" class="logo" alt="Time Keeper Logo">
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                        <i class="fas fa-stopwatch bi me-2"></i>
                        Timer
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <i class="fas fa-list-alt bi me-2"></i>
                        Logs
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <i class="fas fa-sign-out-alt bi me-2"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
        <!-- Stopwatch -->
        <section class="stopwatch_wrapper">
            <div class="stopwatch_container">
                <div class="stopwatch">
                    Let's Begin!
                </div>
                <div class="date">
                    <span class="year"></span>
                    <br>
                    <span class="time"></span>
                </div>
                <div class="controls">
                    <button type="button" class="btn btn-primary" onclick="startStopwatch()">
                        <i class="fas fa-play"></i>
                        Start
                    </button>
                    <button type="button" class="btn btn-warning" onclick="pauseStopwatch()">
                        <i class="fas fa-pause"></i>
                        Pause
                    </button>
                    <button type="button" class="btn btn-danger" onclick="pauseStopwatch()" data-bs-toggle="modal" data-bs-target="#completionModal">
                        <i class="fas fa-stop"></i>
                        Stop
                    </button>
                </div>
            </div>
        </section>
        <div class="modal fade" id="completionModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="completionModal Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Whoo Hoo! You're all done!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Before we can finish off you need to give this log a title. Once done click <strong>Save Changes</strong> to continue. You can click close if you wish to continue timing a specific job.</p>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="log_title" placeholder="Claim for Jon Doe">
                            <label for="log_title">Enter Log Title</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="completeLog()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </main>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="js/app.js"></script>
</body>

</html>