<template>
  <div>
    <div class="header">
      <h1>รายการสินค้า</h1>
      <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" v-model="searchQuery" placeholder="ค้นหาสินค้า..." class="search-box" />
      </div>
    </div>

    <div class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>ราคา: {{ product.price }} บาท</p>
        <router-link :to="'/product/' + product.id">ดูรายละเอียด</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllProduct",
  data() {
    return {
      searchQuery: "",
      products: [
      { id: 1, name: "เสื้อเชิ้ตสีดำ", price: 500, image: require('@/assets/shirt1.jpg') },
      { id: 2, name: "เสื้อเชิ้ตสีขาว", price: 500, image: require('@/assets/shirt2.webp') },
      { id: 3, name: "เสื้อเชิ้ตสีฟ้า", price: 500, image: require('@/assets/shirt3.jpg') },
      { id: 4, name: "เสื้อยืดสีน้ำเงิน", price: 300, image: require('@/assets/tshirt1.avif') },
      { id: 5, name: "เสื้อยืดสีขาว", price: 300, image: require('@/assets/tshirt2.jpg') },
      { id: 6, name: "เสื้อยืดแดง", price: 300, image: require('@/assets/tshirt3.jpg') },
      { id: 7, name: "เสื้อฮู้ดสีดำ", price: 800, image: require('@/assets/hoodie1.jpg') },
      { id: 8, name: "เสื้อฮู้ดสีขาว", price: 800, image: require('@/assets/hoodie2.avif') },
      { id: 9, name: "เสื้อฮู้ดสีแดง", price: 800, image: require('@/assets/hoodie3.jpg') }
    ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  align-items: center;
  position:relative;
  width: 100%;
  top: 45px;
  max-width: 400px;
  margin-bottom: 20px;
}

.search-box {
  width: 100%;
  padding: 10px 40px;
  border: 1px solid #4c00fc;
  border-radius: 5px;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  left: 10px;
  font-size: 16px;
  color: #888;
}

.product-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #000000;
  padding: 75px;
  text-align: center;
  width: 200px;
  border-radius: 100px;
}

.product-image {
  width: 100%;
  height: 225px;
  border-radius: 100px;
}
</style>