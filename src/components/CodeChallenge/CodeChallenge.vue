<template>
  <div class="code-challenge">
    <div class="row">
      <div class="col-8">
        <div class="card time-display mb-4">
          <div
            class="card-body d-flex justify-content-between align-items-center p-2 pl-3 pr-3"
          >
            <p>Time Remaining</p>
            <div class="d-flex align-items-center">
              <span class="time-digits rounded">00</span>
              <span class="time-digit-separator">:</span>
              <span class="time-digits rounded">50</span>
              <span class="time-digit-separator">:</span>
              <span class="time-digits rounded">40</span>
            </div>
          </div>
        </div>

        <div class="editor rounded editor-col">
          <div class="editor-nav d-flex">
            <button class="btn btn-dark editor-nav-btn">RFF</button>
            <button
              class="btn btn-dark btn-block text-left editor-nav-btn d-flex align-items-center justify-content-between"
            >
              <p>index.html</p>
              <i class="fas fa-times mt-1"></i>
            </button>
            <button
              class="btn btn-dark btn-block text-left mt-0 editor-nav-btn d-flex align-items-center justify-content-between"
            >
              <p>custom.css</p>
              <i class="fas fa-times mt-1"></i>
            </button>
            <button
              class="btn btn-dark btn-block text-left mt-0 editor-nav-btn d-flex align-items-center justify-content-between"
            >
              <p>ng-custom.js</p>
              <i class="fas fa-times mt-1"></i>
            </button>
          </div>

          <div class="editor-body">
            <textarea class="bg-dark edit-area"></textarea>
          </div>

          <div class="editor-footer">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <button class="btn btn-blue text-white p-4">Run Code</button>
                <button class="btn ml-3">
                  <i class="fas fa-redo-alt text-white"></i>
                </button>

                <button class="btn ml-3">
                  <i class="far fa-plus-square text-white"></i>
                </button>
              </div>

              <div>
                <button class="btn">
                  <i class="fas fa-expand-arrows-alt text-white mr-3"></i>
                </button>
              </div>
            </div>

            <div
              class="footer-bottom d-flex justify-content-between align-items-center"
            >
              <button class="btn text-white bottom-btn">Back</button>

              <div>
                <p class="text-white">2/8</p>
              </div>

              <button class="btn bg-white bottom-btn">Next</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4 card challenge-card">
        <div class="card-body p-0">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Your Brief Here</h6>
            </div>
          </div>

          <div class="card mt-1">
            <div class="card-body">
              <h6 class="card-title">Welvom to E-studieses!</h6>

              <p class="card-text">
                Are you ready to start coding?
                <br />
                Codecademy is all about learning by doing and by coding. In this
                lesson, we’ll take you through the basics of how to use
                Codecademy and show you some of the power of learning to code!
                <br />
                <br />
                The section below this text contains instructions about what to
                do and how to proceed to the next exercise
              </p>

              <h6 class="card-title mt-4 mb-3">Instructions</h6>

              <p class="card-text">
                The center panel contains a code file which is running in the
                browser panel on the right. Move your mouse cursor over the
                letters in the browser panel to animate them.
                <br />
                <br />
                Click the ‘Next’ button when you’re ready to dive in and start
                coding!
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Participant</th>
                    <th scope="col"><i class="fas fa-certificate gold"></i></th>
                    <th scope="col">
                      <i class="fas fa-certificate silver"></i>
                    </th>
                    <th scope="col">
                      <i class="fas fa-certificate bronze"></i>
                    </th>
                    <th scope="col">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row d-flex">1</th>
                    <td>Mark Tomson</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>64001</td>
                  </tr>
                  <tr>
                    <th scope="row d-flex">2</th>
                    <td>Jacob White</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>64001</td>
                  </tr>
                  <tr>
                    <th scope="row d-flex">3</th>
                    <td>Larry Page</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>64001</td>
                  </tr>

                  <tr>
                    <th scope="row d-flex">4</th>
                    <td>Larry Page</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>64001</td>
                  </tr>
                  <tr>
                    <th scope="row d-flex">5</th>
                    <td>Larry Page</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>64001</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeChallenge",
};
</script>

<style scoped>
.gold {
  color: #ffa70b;
}

.silver {
  color: #adab9f;
}

.bronze {
  color: #a78478;
}

.challenge-card {
  background-color: transparent;
}

.editor {
  border-radius: 0 0 7px 6px;
}

.footer-bottom {
  border-radius: 0 0 7px 6px !important;
}

.bottom-btn:first-child {
  background-color: transparent;
  padding: 25px 40px;
  border-radius: 0 0 0 6px;
}

.bottom-btn:last-child {
  background-color: transparent;
  padding: 25px 40px;
  border-radius: 0 0 6px 0;
}

.fa-plus-square,
.fa-expand-arrows-alt {
  font-size: 1.5rem;
}

.fa-redo-alt {
  font-size: 1.5rem;
  transform: rotateY(180deg);
}

.editor-col {
  background-color: #201e2e;
  margin: 0;
  padding: 0;
  border-radius: 6px 6px 0 0;
}

.time-display {
  background-color: #2f3ced;
  color: #fff;
}

.time-display span {
  margin-left: 5px;
  font-weight: bold;
}

.time-digits {
  background-color: #fff;
  color: #2f3ced;
  padding: 3px 6px;
}

.time-digit-separator {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.editor-nav {
  background: #15131e;
  border-radius: 6px 6px 0 0;
  padding: 5px 10px;
}

.editor-body {
  min-height: 72vh;
}

.btn-dark {
  background-color: transparent;
  border-color: transparent;
  border-radius: 0;
}

.bg-dark {
  background-color: #1d1b2b !important;
}

.edit-area {
  resize: none;
  outline: none;
  width: 100%;
  padding: 10px;
  border: none;
  min-height: 72vh;
  color: #fff;
}

/* width */
.edit-area::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.edit-area::-webkit-scrollbar-track {
  background: #1d1b2b;
}

/* Handle */
.edit-area::-webkit-scrollbar-thumb {
  background: #555;
}

/* Handle on hover */
.edit-area::-webkit-scrollbar-thumb:hover {
  background: #666;
}

.editor-footer {
  background: #15131e;
  border-radius: 0 0 7px 6px;
}

.btn-blue {
  border-radius: 0;
  padding: 30px 45px !important;
}
</style>
