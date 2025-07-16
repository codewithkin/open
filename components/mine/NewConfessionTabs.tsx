import { View, Text } from 'react-native'
import { useState } from 'react'
import { Textarea } from '../ui/textarea';

export function TextConfessionTab() {
    const [text, setText] = useState("");

    return (
        <View>
            <Textarea
                placeholder="Say what's on your mind..."
                value={text}
                onChangeText={setText}
                aria-labelledby='textareaLabel'
            />

            
        </View>
    )
}