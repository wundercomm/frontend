import type { IncomingMessage, ServerResponse } from 'http'
import url from "url"
import { supabase } from '../lib/supabase'

///Validate if email is valid
const validateEmail = (email: string | string[]) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default async (req: IncomingMessage, res: ServerResponse) => {
    const queryObject = url.parse(req.url, true).query
    // console.log(queryObject)

    const { email } = queryObject;
    if (email) {
        const SafeEmail = validateEmail(email)
        if (SafeEmail) {
            try {
                const { data, error } = await supabase.from("site_newsletter_subscriptions").insert([
                    {
                        email: SafeEmail[0]
                    }
                ],
                    { returning: "minimal" }
                )
                if (error) {
                    return error
                }
                else {
                    return {
                        email: SafeEmail[0],
                        message: `We send out to ${SafeEmail[0]} a weekly newsletter with tips and tricks for all-in-one communications.`
                    }
                }
            } catch (error) {
                return error
            }
        }
        else {
            return {
                message: "Invalid Email Format"
            }
        }
    }
}


