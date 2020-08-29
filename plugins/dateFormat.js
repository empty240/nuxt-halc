import Vue from 'vue'

Vue.prototype.$jaDate = (dateTimeString) => {
 if (dateTimeString) {
  const date = new Date(dateTimeString)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
 }
 return ''
}