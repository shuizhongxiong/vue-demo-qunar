<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="child of item"
            :key="child.id"
            @click="handleCityClick(child.name)"
          >{{child.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroller from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  computed: {
    ...mapState({
      currentCity: 'city',
    }),
  },
  watch: {
    letter (newVal) {
      if (newVal && this.scroll) {
        const element = this.$refs[newVal][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BetterScroller(this.$refs.wrapper, {
        click: true,
      });
    });
  },
  activated () { // 被 keep-alive 缓存的组件激活时调用。
    if (this.scroll) {
      this.scroll.scrollTo(0, 0);
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']),
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
