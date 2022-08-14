<template>
  <div class="tab-pane fade show active" id="history" role="tabpanel" aria-labelledby="history-tab">
    <div class="filter-section mb-60 glow">
      <div class="section-text text-center">
        <h5>Search in History</h5>
      </div>
      <form action="#">
        <div class="row">
          <div class="col-xl-3 col-lg-6">
            <div class="input-area">
              <img src="/images/icon/search-icon.png" alt="icon">
              <input type="text" placeholder="Search by name">
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="single-input">
              <select>
                <option>Filter by Rarity</option>
                <option value="2">Magical</option>
                <option value="3">Mythical</option>
                <option value="4">Epic</option>
                <option value="3">Legendary</option>
                <option value="4">Demi-God</option>
              </select>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="single-input">
              <select>
                <option>Order by date</option>
                <option value="1">Newest</option>
                <option value="2">Oldest</option>
              </select>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="input-area">
              <img src="/images/icon/date-icon.png" alt="icon">
              <input type="text" id="dateSelect" placeholder="Select Date">
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="table-responsive glow">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Winner</th>
          <th scope="col">Rarity</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Feb 20</td>
          <td>Tournament 1</td>
          <td>46510</td>
          <td>Magical</td>
        </tr>
        <tr>
          <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Feb 27</td>
          <td>Tournament 2</td>
          <td>46510</td>
          <td>Epic</td>
        </tr>
        <tr>
          <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Mar 05</td>
          <td>Tournament 3</td>
          <td>46510</td>
          <td>Mithical</td>
        </tr>
        <tr>
          <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Mar 13</td>
          <td>Tournament 4</td>
          <td>46510</td>
          <td>Demi</td>
        </tr>
        <tr>
          <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Mar 21</td>
          <td>Tournament 5</td>
          <td>46510</td>
          <td>Legendary</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="row mt-60">
      <div class="col-lg-12 d-flex justify-content-center">
        <nav aria-label="Page navigation" class="d-flex justify-content-center">
          <ul class="pagination justify-content-center align-items-center pb-20">
            <li class="page-item">
              <a class="page-btn previous glow" href="javascript:void(0)"
                 aria-label="Previous">
                <img src="/images/icon/arrow-left.png" alt="icon">
              </a>
            </li>
            <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">1</a>
            </li>
            <li class="page-item"><a class="page-link xlr active glow"
                                     href="javascript:void(0)">2</a></li>
            <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">3</a>
            </li>
            <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">4</a>
            </li>
            <li class="page-item">
              <a class="page-btn next glow" href="javascript:void(0)" aria-label="Next">
                <img src="/images/icon/arrow-right.png" alt="icon">
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HistoryTab"
})
</script>

<style scoped>

</style>
