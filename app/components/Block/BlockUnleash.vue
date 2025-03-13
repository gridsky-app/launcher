<script setup lang="ts">
import {ethers} from 'ethers'

const appPreviewStore = useAppPreviewStore()

const account = ref(null)
const result = ref(null)
const loading = ref(false)
const error = ref("")

watch(() => account.value, value => {
  if (value && appPreviewStore.profile) {
    checkPremium(appPreviewStore.profile.did)
  }
})

watch(() => appPreviewStore.profile, value => {
  if (account.value) {
    loading.value = true
    checkPremium(appPreviewStore.profile.did)
  }
})

const CONTRACT_ADDRESS = "0x05c704B143B6B68d391F5DdEC4E6BA1230A93A22"

const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "string", "name": "did", "type": "string"}
    ],
    "name": "isPremium",
    "outputs": [
      {"internalType": "bool", "name": "", "type": "bool"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "did", "type": "string"}
    ],
    "name": "registerPremium",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]

// --- Funzione per connettere MetaMask ---
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      account.value = accounts[0]
    } catch (err) {
      console.error("Errore nella connessione a MetaMask:", err)
      error.value = err.message || "Errore durante la connessione a MetaMask"
    }
  } else {
    error.value = "MetaMask non è installato!"
  }
}

// --- Funzione per verificare se il DID è premium (read-only) ---
async function checkPremium(did: string) {
  if (!account.value) {
    error.value = "Collega MetaMask prima!"
    return
  }
  loading.value = true
  error.value = ""
  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    // Per le funzioni di sola lettura, usiamo il provider (non il signer)
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    const res = await contract.isPremium(did)
    result.value = res
  } catch (err) {
    console.error(err)
    error.value = err.message || "Errore durante la chiamata al contratto"
  } finally {
    loading.value = false
  }
}

// --- Funzione per pagare (invocare registerPremium) ---
async function payForPremium() {
  if (!account.value) {
    error.value = "Collega MetaMask prima!"
    return
  }
  loading.value = true
  error.value = ""
  try {
    // Creiamo un provider e otteniamo il signer per le transazioni
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    // Istanza del contratto collegata al signer per inviare una transazione
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
    // Specifica l'importo da pagare come valore in wei (ad esempio, la tariffa mensile).
    // Supponiamo che il costo mensile sia 0.1/6 ether, approssimativamente 0.017 ether.
    const paymentAmount = ethers.parseEther("0.017")

    // Invia la transazione chiamando registerPremium con il DID e il valore da inviare
    const tx = await contract.registerPremium(appPreviewStore.profile.did, {value: paymentAmount})
    // Attendi la conferma della transazione
    await tx.wait()
    console.log("Pagamento eseguito con successo!", tx)
    // Puoi aggiornare lo stato (ad es., verificare di nuovo se il DID è premium)
    await checkPremium(appPreviewStore.profile.did)
  } catch (err) {
    console.error(err)
    error.value = err.message || "Errore durante il pagamento"
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <BlockLayout>

    <h1 class="text-h1 font-weight-thin ml-n2">
      Unleash
    </h1>
    <div class="text-overline text-grey-darken-2 mt-6">
      your profile
    </div>
    <p class="text-subtitle-1 mb-5">
      Support the continued development of Gridsky<br/>
      while unlocking advanced appearance settings<br/>
      and all future premium features—forever
    </p>

    <v-btn
        v-if="!account"
        class="px-0" style="padding-top: 11px; padding-bottom: 11px;"
        :width="340" variant="outlined"
        max-width="calc(100vw - (8.3333333333% * 2))"
        @click="connectWallet"
    >
      Connect wallet
    </v-btn>

    <template v-else>

      <FormFieldUsernameUnleash
          v-model="appPreviewStore.username"
          density="compact"
          :width="340"
          max-width="calc(100vw - (8.3333333333% * 2))"
      >
        <template #append-inner v-if="appPreviewStore.username">

          <div v-if="loading" class="d-inline-block mt-n2" style="width: 64px;">
            <v-progress-linear class="d-inline-block" indeterminate :max-width="32"/>
          </div>
          <template v-else>

            <v-chip
                v-if="typeof result === 'boolean' && result"
                color="blue"
                class="text-overline" style="margin-top: -2px;"
            >Premium</v-chip>

            <v-chip
                v-if="typeof result === 'boolean' && !result"
                class="text-overline cursor-pointer" style="margin-top: -2px;"
            >Pay</v-chip>

          </template>

        </template>

        <v-menu
            v-if="appPreviewStore.profile"
            activator="parent" model-value :offset="[15, 0]"
        >
          <v-card color="background" border>
            <v-card-text>

              <div class="mb-4">
                Currently testing via Ethereum Testnet.
              </div>

              <v-btn @click="payForPremium">
                Pay 0.05 ETH
              </v-btn>

            </v-card-text>
          </v-card>
        </v-menu>
      </FormFieldUsernameUnleash>

    </template>
  </BlockLayout>
</template>

<style scoped>
/* Aggiungi eventuali stili personalizzati */
</style>