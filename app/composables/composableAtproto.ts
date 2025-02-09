import {AtpAgent, Agent} from '@atproto/api'

let atprotoInstanceAgent: any = {}

export function useAtprotoAgent() {
    return {
        setService(type: 'public') {
            if (!atprotoInstanceAgent.hasOwnProperty(type)) {
                atprotoInstanceAgent[type] = new AtpAgent({
                    service: this.getServiceUrl(type),
                })
            }

            return atprotoInstanceAgent[type]
        },
        getService(type: 'public') {
            return atprotoInstanceAgent[type]
        },
        getServiceUrl(type: 'public'): string {
            switch (type) {
                case 'public':
                    return 'https://public.api.bsky.app';
            }
        },
    }
}