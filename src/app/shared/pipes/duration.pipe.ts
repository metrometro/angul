import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(minutes: number) {
        const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
        const mins = (minutes % 60).toString().padStart(2, '0');
        return `${hours}:${mins}`;        
    }
}
