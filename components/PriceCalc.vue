<template>
  <div class="flex justify-center">
    <div class="w-1/2 bg-nosferatu-800 rounded-lg shadow px-6 py-12 flex flex-col items-center">
      <h1 class="text-green-600 text-5xl p-3">
        WunderComm Pricing
      </h1>
      <div class="flex">
        <div class="text-green-600 mt-2">
          frequency:
        </div>
        <div class="bg-gray-400 rounded-full flex justify-around p-1 m-1">
          <button
            v-for="(price, frequency) in plans[0].perUserPricing"
            :key="price.id"
            class="rounded-full text-xs font-bold px-6 py-1 focus:outline-none "
            :class="currentFrecuency == frequency ? 'bg-green-600' : ''"
            @click="currentFrecuency = frequency"
          >
            {{ frequency }}
          </button>
        </div>
        <div class="text-green-600 mt-2">
          pstn:
        </div>
        <div class="bg-gray-400 rounded-full flex justify-around p-1 m-1">
          <button
            v-for="(price, pstnType) in plans[0].pstnPricing"
            :key="price.id"
            class="rounded-full text-xs font-bold px-6 py-1 focus:outline-none "
            :class="currentPstnType == pstnType ? 'bg-green-600' : ''"
            @click="currentPstnType = pstnType"
          >
            {{ pstnType }}
          </button>
        </div>
        <div class="text-green-600 mt-2">
          crm:
        </div>
        <div class="bg-gray-400 rounded-full flex justify-around p-1 m-1">
          <button
            v-for="(price, whitOwnCrm) in plans[0].crmPricing"
            :key="price.id"
            class="rounded-full text-xs font-bold px-6 py-1 focus:outline-none "
            :class="currentOwnCRM == whitOwnCrm ? 'bg-green-600' : ''"
            @click="currentOwnCRM = whitOwnCrm"
          >
            {{ whitOwnCrm }}
          </button>
        </div>
      </div>

      <section class="rounded-md shadow-md bg-darker-900 p-4 text-center mb-6 m-8 text-green-600">
        <p class="font-bold">
          users
        </p>
        <p class="text-5xl font-bold">
          {{ concurrentUsers }}
        </p>
        <input
          v-model="concurrentUsers"
          type="range"
          min="1"
          max="500"
          class="slider w-full h-1 rounded-lg outline-none"
        >
      </section>
      <div class="flex w-full pt-8 text-center">
        <div v-for="plan in plans" :key="plan.id" simple class="w-1/2 text-white">
          <h1 class="text-2xl font-bold">
            {{ plan.name }}
          </h1>
          <ul class="pt-4">
            <li v-for="benefit in commonBenefits" :key="benefit.id">
              {{ benefit }}
            </li>
            <li v-for="benefit in getPstnBenefits(plan.name)" :key="benefit.id">
              {{ benefit }}
            </li>
            <li v-for="benefit in plan.benefits[currentFrecuency]" :key="benefit.id">
              {{ benefit }}
            </li>
          </ul>
          <div class="flex justify-center pt-8">
            <div class="text-4xl text-green-600 font-bold">
              {{ getPrice(plan, concurrentUsers) }}
            </div>
            <div class="pl-1 pt-4 text-green-600" />
            {{ plan.perUserPricing[currentFrecuency].label }}
          </div>
        </div>
      </div>
      <div class="p-10" />
      <div class="pt-4 text-center text-wunderpink ">
        <a href="#" @click.prevent=" currency = 'usd'">USD</a> |
        <a
          href="#"
          @click.prevent=" currency = 'cop'"
        >COP</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      concurrentUsers: 5,
      currentFrecuency: 'Monthly',
      currentPstnType: 'Inbound',
      currentOwnCRM: 'Own',
      currency: 'usd',
      commonBenefits: [
        'WunderDial',
        'WunderPhone',
        'Google contact Integration',
        'CRM integration',
        'Slack Migration'
      ],
      commonPstnWithoutBenefits: [
        'Your PBX',
        'Your SIP Trunks'
      ],
      commonPstnUnlimitedBenefits: [
        'Business Calling',
        'Local business numbers'
      ],
      commonPstnInboundBenefits: [
        'Local business numbers',
        'Business Inbound Calling'
      ],
      plans: [
        {
          name: 'WunderComm',
          benefits: {
            Monthly: ['Team Collaboration', 'Whatsapp bridge', 'Instagram bridge', 'Email Alias', 'Jamstack Web Page'],
            yearly: ['Team Collaboration', 'Whatsapp bridge', 'Instagram bridge', 'Email Alias', 'Jamstack Web Page', '1000 MB of recordings']
          },
          perUserPricing: {
            Monthly: { price: 18.90, label: '/mo' },
            yearly: { price: 189, label: '/yr' }
          },
          pstnPricing: {
            Without: { price: 0 },
            Inbound: { price: 5 },
            Unlimited: { price: 9.99 }
          },
          crmPricing: {
            Own: { price: 0.99 },
            WunderCRM: { price: 4.99 }
          }
        },
        {
          name: 'WunderContact',
          benefits: {
            Monthly: ['Team Collaboration', 'Whatsapp bridge', 'Instagram bridge', 'Email Alias', 'Jamstack Web Page'],
            yearly: ['Team Collaboration', 'Whatsapp bridge', 'Instagram bridge', 'Email Alias', 'Jamstack Web Page', '1T of recordings']
          },
          perUserPricing: {
            Monthly: { price: 39.99, label: '/mo' },
            yearly: { price: 399, label: '/yr' }
          },
          pstnPricing: {
            Without: { price: 0 },
            Inbound: { price: 5 },
            Unlimited: { price: 9.99 }
          },
          crmPricing: {
            Own: { price: 0.99 },
            WunderCRM: { price: 4.99 }
          }
        },
        {
          name: 'bring your own everything',
          benefits: {
            Monthly: ['Your Team Collaboration', 'You TI team', 'Your cloud', 'Your Datacenter', 'Your infrastructure'],
            yearly: ['Your Team Collaboration', 'You TI team', 'Your cloud', 'Your Datacenter', 'Your infrastructure', 'Your Storage']
          },
          perUserPricing: {
            Monthly: { price: 2.99, label: '/mo' },
            yearly: { price: 29, label: '/yr' }
          },
          pstnPricing: {
            Without: { price: 0 },
            Inbound: { price: 0 },
            Unlimited: { price: 0 }
          },
          crmPricing: {
            Own: { price: 0 },
            WunderCRM: { price: 0 }
          }
        }
      ]
    }
  },
  methods: {
    getPrice (plan) {
      let price = 0
      let trunks = 0
      const reuse = 0.2
      trunks = Math.ceil(reuse * this.concurrentUsers)
      price = plan.perUserPricing[this.currentFrecuency].price * this.concurrentUsers
      price = price + plan.pstnPricing[this.currentPstnType].price
      price = price + (plan.pstnPricing[this.currentPstnType].price * trunks)
      price = price + (plan.crmPricing[this.currentOwnCRM].price * this.concurrentUsers)
      return this['currency' + this.currency.toUpperCase()](price)
    },
    currencyUSD (price) {
      return '$' + Math.ceil(price)
    },
    currencyCOP (price) {
      return 'COL$' + Math.ceil(price * 3500)
    },
    getPstnBenefits (plan) {
      if (plan === 'bring your own everything') {
        return ['Your SIP trunk', 'Your PBX']
      } else {
        return this['commonPstn' + this.currentPstnType + 'Benefits']
      }
    }
  }
}
</script>
